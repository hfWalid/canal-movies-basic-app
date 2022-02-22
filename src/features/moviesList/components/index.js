import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMoviesResult} from "../store/selector";
import {getMoviesList} from "../store/action";
import {Container, ContainerBody, ContainerHead} from "../styles/default";
import {useHistory} from "react-router-dom";
import MovieDisplay from "./MovieDisplayer";
import {onClickRow} from "../utils/helpers";

//TODO: needs display and cache all result, and add pagination navigation
const MoviesList = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(makeSelectMoviesResult);

    useEffect(() => {
        dispatch(getMoviesList({page: 1}));
    }, [dispatch]);

    return (
        <Container>
            <ContainerHead></ContainerHead>
            <ContainerBody>
                {movies && movies.map( (movie, index) => (
                    <Fragment key={index}>
                        <MovieDisplay
                            onClick={() => onClickRow(movie.id, movies, dispatch, history)}
                            movie={movie}
                        />
                    </Fragment>)
                )}
            </ContainerBody>
        </Container>);
};

export default MoviesList;
