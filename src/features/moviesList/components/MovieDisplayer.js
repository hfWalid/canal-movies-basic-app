import React from 'react';

import {Container} from "../styles/movieDisplayer";

type Props = {
    movie: any,
    onClick: Function,
    key: number
}

const MovieDisplay = ({movie, onClick, key}: Props) => {

    return(
        <Container onClick={onClick} key={key}>
            {movie.title}
        </Container>
    );
};

export default MovieDisplay;
