import axios from 'axios';

export const API = {
  baseUrl: 'https://swapi.dev/api',
  get: (url) => {},
  search: function (entity, part) {
    return axios.get(`${this.baseUrl}/${entity}/?search=${part}`);
  },
};
