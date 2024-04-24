import axios from 'axios';

const axiosInstance = axios.create({

  // server api

  // baseURL: 'http://hybrid.srishticampus.in:4004/packers_and_movers_api', 

//local api

  baseURL: 'http://localhost:4004/packers_and_movers_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance