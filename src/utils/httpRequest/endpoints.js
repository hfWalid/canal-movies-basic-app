import {BASE_URL, NEXT_PUBLIC_API_KEY} from "./api-service";

export const Endpoints = {
    moviesList: (page) => `trending/all/day?api_key=${NEXT_PUBLIC_API_KEY}&page=${page}`,

}
