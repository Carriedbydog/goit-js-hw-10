import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_mU3SNdxCHQzy1Vuwa2KAVzcMfJZ5JvURdt1ylUd57xO3bcWYtOlsSWtEv367nzD5';

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  axios
    .get(`${BASE_URL}/breeds`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
}

function fetchCatByBreed(breedId) {
  axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(res => res.data[0])
    .catch(err => {
      throw err;
    });
}

export { fetchBreeds, fetchCatByBreed };
