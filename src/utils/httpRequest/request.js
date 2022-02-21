// @flow

import axios, {AxiosResponse} from 'axios';
import history from '../history';
import URLS from '../../common/constants/urls';

const createRequest = (
    url: string,
    method: string,
    data?: any,
    responseType?: string,
) => {

    return axios({
        url,
        method,
        data,
        undefined,
        responseType: responseType || 'json',
    });
};

const checkStatus = (error) => {
    if (error.response && error.response.status === 501) {
        history.push(URLS.home);
    } else if (error.response && error.response.message) {
        throw new Error(error.response.message);
    } else {
        throw new Error("Erreur lors de l'appel du service")
    }
    return undefined;
};

export function request(
    url: string,
    method: string,
    data?: any,
    responseType?: string,
): Promise<any> {
    return requestFunction
        .createRequest(url, method, data, responseType)
        .then((response: AxiosResponse) => response.data)
        .catch(requestFunction.checkStatus);
}

const requestFunction = {
    request,
    checkStatus,
    createRequest,
};

export default requestFunction;
