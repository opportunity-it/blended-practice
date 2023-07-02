import { UnsplashAPI } from './UnsplashAPI';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';
import { Notify } from 'notiflix';

const jsGallery = document.querySelector('.js-gallery');
const searchForm = document.querySelector('.js-search-form');

const api = new UnsplashAPI();

const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

api.getPopularImages(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  jsGallery.innerHTML = markup;

  
});

pagination.on('afterMove', getPopular)

function getPopular(event) {
  const currentPage = event.page;
  api.getPopularImages(currentPage).then(({ results, total }) => {
    const markup = createGalleryCard(results);
    jsGallery.innerHTML = markup;

  });
}

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  const { query } = event.target.elements;

  const searchQuery = query.value.trim();
  if (searchQuery === '') {
    return Notify.failure('Введіть дані');
  };

  pagination.off('afterMove', getPopular);
   pagination.off('afterMove', getByQuery)
  api.query = searchQuery;
  api.getImagesByQuery(page).then(({ results, total }) => {
    if (total === 0) {
      Notify.failure('введіть коректне значення')
            return;
    };
    
    pagination.reset(total);
    
    Notify.success(`Знайдено ${total} зображень`);
  const markup = createGalleryCard(results);
  jsGallery.innerHTML = markup;
  });
  
  pagination.on('afterMove', getByQuery); 
};

function getByQuery(event) {
  const currentPage = event.page;
  api.getImagesByQuery(currentPage).then(({ results, total }) => {
    const markup = createGalleryCard(results);
    jsGallery.innerHTML = markup;


  });
   }