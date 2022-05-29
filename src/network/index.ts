import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://getlens-master.stage.dev.family/api/pages/obektivy',
  headers: { Authorization: `Basic YWRtaW46V2ozZzRX` },
});
