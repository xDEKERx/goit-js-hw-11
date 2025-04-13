import axios from 'axios';

const API_KEY = '49627235-4d8b848df827aeac6c5905e8e';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error.message);
      return [];
    });
}