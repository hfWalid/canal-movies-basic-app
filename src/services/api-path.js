import {BASE_URL} from "../utils/httpRequest/api-service";

const getApiBasePath = () =>
    process.env.NODE_ENV === 'development' ? BASE_URL : '/c-c';

export default {
    getApiBasePath,
};
