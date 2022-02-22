export const moviesListMock = [
    {
        adult: false,
        backdrop_path: "/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg",
        genre_ids: [27],
        id: 1,
        media_type: "movie",
        original_language: "en",
        original_title: "Texas Chainsaw Massacre",
        overview: "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
        popularity: 316.107,
        poster_path: "/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
        release_date: "2022-02-18",
        title: "Texas Chainsaw Massacre",
        video: false,
        vote_average: 5.3,
        vote_count: 291,
    },
];

export const apiOtherResults= {
    page: 1,
    totalPages: 100,
    totalResults: 10000,
};

export const responseMock = {
    results: moviesListMock,
    ...apiOtherResults,
}
