import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMoviesResult} from "../store/selector";
import {getMoviesList} from "../store/action";
import {Container, ContainerBody, ContainerHead, MovieContainer} from "../styles/default";

const MoviesList = () => {

    const dispatch = useDispatch();

    const movies = useSelector(makeSelectMoviesResult);

    useEffect(() => {
        dispatch(getMoviesList({page: 1}));
    }, []);


    return (
        <Container>
            <ContainerHead></ContainerHead>
            <ContainerBody>
                {movies && movies.map( (movie, index) => (
                    <MovieContainer key={index}>
                        {movie.title}
                    </MovieContainer>)
                )}
            </ContainerBody>
        </Container>);
};

export default MoviesList;
