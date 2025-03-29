import { AxiosResponseHeaders } from 'axios';

export type DataRes = {
    status: boolean
    data: unknown
    message: string
    statusCode: number
    isError: boolean
    isSuccess: boolean
    headers: AxiosResponseHeaders
    errorCode?: string
};

export type ResObj = {
    data: object[] | object | string
    status: boolean
    message: string
    errorCode?: string
};

export type DataObj = {
    data: ResObj
    status: number
    headers: AxiosResponseHeaders
    errorCode?: string
};

export const getApiResponse = (data: DataObj | any) => {
    const {
        status, data: resData, message,
        errorCode,
    } = data?.data || {};

    const res = {
        status,
        data: resData,
        message,
        statusCode: 200,
        isError: !status,
        isSuccess: status,
        headers: data?.headers,
        errorCode,
    };

    if (data?.status !== 200) {
        res.statusCode = data?.status;
        res.isError = true;
        res.isSuccess = false;
    }

    return res;
};

export type APIResponseType = ReturnType<typeof getApiResponse>;
