import { API_URL } from './apiUrl';

export const fetchData = (setData, fetchUrl, setLoader) => {
  fetch(`${API_URL}${fetchUrl}?_limit=-1`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoader(true);
    });
};