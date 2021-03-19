import React from 'react';
import {  useDispatch } from "react-redux";
import styled from 'styled-components';


const Wrapper = styled.div`
border: solid;
width: 200px;
height: 100px;
padding: 4px;
margin: 4px;
background-color: blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 30px;
`;

export default function Article(props) {
  const dispatch = useDispatch();

  return (
    <Wrapper onClick={handleClick}>
      <div>{props.name}</div> 
      <div>{props.price} €</div>
    </Wrapper>
  );

  function handleClick(){
    dispatch({
      type: props.type,
      name: props.name,
      price: props.price,
      id: props.id,
      category: props.category,
    })
  }
}