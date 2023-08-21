// import axios from 'axios';
import { fetchCatByBreed, fetchBreeds } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  //   loader: document.querySelector('.loader'),
  //   error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
selectMarkup();
function selectMarkup() {
  return fetchBreeds().then(data => {
    data.forEach(breed => {
      const characteristics = document.createElement('option');
      characteristics.value = breed.id;
      characteristics.textContent = breed.name;
      refs.select.appendChild(characteristics);
    });
  });
}

refs.select.addEventListener('change', onSearchCat);

function onSearchCat() {
  refs.catInfo.innerHTML = '';

  fetchCatByBreed(refs.select.value)
    .then(data => renderBreed(data))
    .catch(error => {
      console.log(error);
    });
}

function templateBreed({ image, description, temperament, name }) {
  return `
  <img src="${image}" alt="${name}" width="600" height="400"/>
  <div>
      <h2>${name}</h2>
      <p>${description}</p>
      <p>${temperament}</p>
    </div>
    `;
}

function renderBreed(data) {
  const markup = templateBreed(data);
  refs.catInfo.innerHTML = markup;
}
