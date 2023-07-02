export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #KEY_API = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';

  getPopularImages(page) {
    const url = `${
      this.#BASE_URL
    }?page=${page}&query=popular&per_page=12&orientation=portrait&client_id=${
      this.#KEY_API
    }`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => console.log(err));
  }
  getImagesByQuery(page) {
    const url = `${
      this.#BASE_URL
    }?page=${page}&query=${this.#query}&per_page=12&orientation=portrait&client_id=${
      this.#KEY_API
    }`;

    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => console.log(err));
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
};


