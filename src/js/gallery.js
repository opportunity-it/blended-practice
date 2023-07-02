import { UnsplashAPI } from './UnsplashAPI';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { createGalleryCard } from './createGalleryCard';

const jsGallery = document.querySelector('.js-gallery');

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

  console.log(results);
});
