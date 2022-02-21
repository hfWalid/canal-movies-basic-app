const getApiBasePath = () =>
    process.env.NODE_ENV === 'development' ? 'http://localhost:9090' : '/c-c';

export default {
    getApiBasePath,
};
