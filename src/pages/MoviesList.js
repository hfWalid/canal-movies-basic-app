import React from 'react';

import { MoviesList } from '../features/moviesList';


const MoviesListPage: function = (props) => {
    return (
        <MoviesList {...props}/>
    );
};

export default MoviesListPage;
