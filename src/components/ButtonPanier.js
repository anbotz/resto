import React from 'react';
import { useDispatch } from "react-redux";
// import styled from 'styled-components';

export default function ButtonPanier(props) {
    const dispatch = useDispatch();

    function handleOnClick() {
        dispatch({
            type: props.type,
            id: props.id,
            price: props.price,
        })
    }

    return (
        <button onClick={handleOnClick}>{props.signe}</button>
    );

}