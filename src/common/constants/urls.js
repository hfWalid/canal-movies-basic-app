import type {URLS} from "../types/constantsType";

const contextPath = '/movies';

const Urls: URLS = {
    movies: `${contextPath}`,
    display: `${contextPath}/movie`,
};

export default Urls;
