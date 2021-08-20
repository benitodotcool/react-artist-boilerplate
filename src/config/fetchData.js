import { API_URL } from '../config/config';

export const fetchData = (setData) => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setData(data.meals);
    });
};
