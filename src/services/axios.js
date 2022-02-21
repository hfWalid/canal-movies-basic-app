//@flow

import axios, { AxiosRequestConfig } from 'axios';
import apiPath from './api-path';

export const configureAxios = () => {
    axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const baseUrl = apiPath.getApiBasePath();

            return {
                ...config,
                url: baseUrl + config.url
            };
        },
        (error) => Promise.reject(error),
    );
};
