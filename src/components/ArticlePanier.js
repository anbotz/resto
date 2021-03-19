import React from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import ButtonPanier from './ButtonPanier';



const Wrap = styled.div`
border: solid;
flex: -10 ; /* explanation below */
background-color: blue;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border-radius: 30px;
margin: 4px;
padding: 4px;
`;

const Bouton = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

width: 200px;

`;

const Nom = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 200px;

`;

const Qte = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


`;

export default function ArticlePanier(props) {
  const state = useSelector(state => state);


  return (
    <div>
      {state[props.name].map((sandwich, key) =>
        <div key={key}>
          {sandwich.quantity !== 0
            ? <Wrap>
              <Nom>{sandwich.name}</Nom>
              <Bouton>
                <div>{sandwich.price * sandwich.quantity}  €</div>    
                <Qte>
                {sandwich.quantity}
                  <ButtonPanier name="add" signe="+" type={props.typeAdd} id={sandwich.id} price={sandwich.price} />
                  <ButtonPanier name="sub" signe="-" type={props.typeSub} id={sandwich.id} price={sandwich.price} />
                </Qte>

              </Bouton>
            </Wrap>
            : ''}
        </div>)}
    </div>
  )
}