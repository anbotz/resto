import React from 'react';
import { useSelector, useDispatch } from "react-redux";
// import styled from 'styled-components';

import { useHistory } from "react-router-dom";



export default function Paiement() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let history = useHistory();

    const listSandwiches = state.sandwiches.map((sandwich, key) =>
    <div key={key}>
        {sandwich.quantity !== 0
            ? sandwich.quantity + 'x ' + sandwich.name + sandwich.price * sandwich.quantity + ' €'
            : ''}
    </div>
)

const listDesserts = state.desserts.map((dessert, key) =>
    <div key={key}>
        {dessert.quantity !== 0
            ? dessert.quantity + 'x ' + dessert.name + dessert.price * dessert.quantity
            : ''}
    </div>
)

const listBoissons = state.boissons.map((dessert, key) =>
    <div key={key}>
        {dessert.quantity !== 0
            ? dessert.quantity + 'x ' + dessert.name + dessert.price * dessert.quantity
            : ''}
    </div>
)

    function onCancel() {
        history.goBack();
    }

    function onConfirm() {
        window.confirm('achat fait!');
        history.push("/");
        dispatch({
          type: 'RESET',
        })

    }


    return (
        <div>
            <h2>Récapitulatif</h2>
            Sandwich :
            {listSandwiches}
Boisson :
          {listBoissons}
          Dessert :
          {listDesserts}
            <button onClick={onConfirm}>Confirmer</button>
            <button onClick={onCancel}>Annuler</button>
        </div>
    );
}