import React, {useEffect} from "react";
import {Container} from "../styles/default";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMovie} from "../store/selector";
import {getSelectedMovie} from "../store/action";

const Display = (props) => {
    const dispatch = useDispatch();

    const selectedMovie = useSelector(makeSelectMovie);

    useEffect(() => {
        if(!selectedMovie)
            dispatch(getSelectedMovie());
    }, [dispatch, selectedMovie]);

    return (
        <Container>
            {selectedMovie && selectedMovie.title}
        </Container>
    );
};

export default Display;
