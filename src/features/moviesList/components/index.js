import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMoviesResult} from "../store/selector";
import {getMoviesList} from "../store/action";

const MoviesList = (props) => {

    const dispatch = useDispatch();

    const movies = useSelector(makeSelectMoviesResult);

    useEffect(() => {
        dispatch(getMoviesList({page: 1}));
    }, []);


    return (<div>Movies List page</div>);
};

export default MoviesList;
