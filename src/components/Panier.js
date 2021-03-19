import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import ArticlePanier from './ArticlePanier';

const Wrapper = styled.div`
border: solid;
width: 300px;
height: 600px;
display: flex;
flex-direction: column;
`;

export default function Panier(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <Wrapper>
      {state.currentPrice !== 0
        ? <div>
          <ArticlePanier name="sandwiches" typeAdd="ADD_SANDWICH" typeSub="REMOVE_SANDWICH" />
          <ArticlePanier name="boissons" typeAdd="ADD_BOISSON" typeSub="REMOVE_BOISSON" />
          <ArticlePanier name="desserts" typeAdd="ADD_DESSERT" typeSub="REMOVE_DESSERT" />
        </div>
        : 'Votre panier est vide'
      }

      Total : {state.currentPrice} €
      <button onClick={commander} disabled={state.currentPrice === 0 ? "disabled" : ''}>Commander</button>
      <button onClick={reset} disabled={state.currentPrice === 0 ? "disabled" : ''}>Annuler la commande</button>
    </Wrapper>

  )

  function commander() {
    history.push("/paiement");
  }

  function reset() {
    history.push("/");
    dispatch({
      type: 'RESET',
    })
  }
}