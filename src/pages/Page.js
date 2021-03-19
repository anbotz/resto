import React from 'react';
import { useSelector } from "react-redux";
import Article from '../components/Article'
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border: solid;
width: 900px;
`;

const Wrap = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
border: solid;
width: 800px;
`;

export default function Page(props) {
  const state = useSelector(state => state);

  const listItems = state[props.name].map((article, key) =>
    <Article name={article.name} price={article.price} key={key} id={article.id} category={article.category} type={props.type}/>
  );

  return (
    <Wrapper>
      <h2>{props.name}</h2>
      <Wrap>{listItems}</Wrap>
    </Wrapper>
  );
}