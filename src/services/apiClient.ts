import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export { AxiosError };
