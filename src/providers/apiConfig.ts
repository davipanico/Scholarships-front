/* eslint-disable linebreak-style */
import * as ax from 'axios';

const axios = (): ax.AxiosInstance => ax.default.create({
  baseURL: process.env.REACT_APP_APIROUTE,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export default axios;
