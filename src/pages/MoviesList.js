import React from 'react';

import { MoviesList } from '../features/moviesList';
import { Page } from '../components';


const MoviesListPage: function = (props ) => {
    return (
        <Page>
            <MoviesList {...props}/>
        </Page>
    );
};

export default MoviesListPage;
