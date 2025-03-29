import { store } from '@network/reducers/store';
import axios, { AxiosInstance } from 'axios';

export interface ErrorResponse {
    [key: string]: {
        status: number
        data: {
            message: string
            data: unknown
            path: string
        }
    },
}

export const axiosRequestConfig = {
    method: 'get', // default
    timeout: 1000 * 10, // default is `0` (no timeout)

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default

    // `maxContentLength` defines the max size of the http
    // response content in bytes allowed in node.js
    maxContentLength: 2000,

    // `maxBodyLength` (Node only option) defines the max size of the http
    // request content in bytes allowed
    maxBodyLength: 2000,

    // If set to 0, no redirects will be followed.
    maxRedirects: 0, // default

};

// Add a request interceptor
axios.interceptors.request.use(
    // Do something before request is sent
    (config) => config,
    // Do something with request error
    (error) => Promise.reject(error),
);

const useInterceptor = (ref: AxiosInstance) => {
    ref.interceptors.response.use(
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        (response) => response,
        (error: ErrorResponse) => {
            if (__DEV__) {
                console.log(JSON.stringify(error));
            }
            const { status } = error?.response || {};
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error

            if (status !== 200 && status !== 304) {
                console.log('res=>', 'something went wrong')
                // store.dispatch(onSetError({ isError: true, message: 'Something went wrong!' }));
            }
            // if (status === 401) {
            //     logoutUser(nav as NavigationContainerRef);
            // }

            return Promise.reject(error?.response);
        },
    );
};

class APIService {
    mockService!: AxiosInstance;

    mockService2!: AxiosInstance;

    mockService3!: AxiosInstance;

    mockService4!: AxiosInstance;

    mockService5!: AxiosInstance;

    userService!: AxiosInstance;

    constructor() {
        this.initService();
    }

    async initService() {
        const { activeEnvReducer } = store.getState();
        const headers = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const mockUrl = activeEnvReducer?.activeEnv.MOCK_URL;
        this.mockService = axios.create({ ...axiosRequestConfig, ...headers, baseURL: mockUrl });
        useInterceptor(this.mockService);

    }

    changeEnv() {
        this.initService();
    }
}

export const API = new APIService();
