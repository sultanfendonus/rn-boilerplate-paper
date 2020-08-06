import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_PRIYO_AUTH_BASE,
});

export default instance;
