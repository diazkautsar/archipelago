/**
LEVEL 2.5
Update code with async/await

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.xyz/file404.json')
  .catch(alert); // Error: 404
 */

import axios from 'axios'

const loadJson = async (url: string) => {
    try {
      const response = await axios.get(url)

      console.log(response)
    } catch (error) {
      throw error
    }
}

(async () => await loadJson("https://javascript.xyz/file404.json").catch((err) => console.log("ERROR 404")))()