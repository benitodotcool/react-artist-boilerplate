import { API_URL } from '../config/config';

// export const fetchData = (setData, fetchUrl) => {
//   fetch(`${API_URL}${fetchUrl}`)
//     .then((response) => response.json())
//     .then((data) => {
//       setData(data);
//     });
// };
export const fetchData = (setData, fetchUrl) => {
  fetch(`${API_URL}${fetchUrl}?_limit=-1`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
};