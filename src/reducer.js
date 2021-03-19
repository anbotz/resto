
import {sandwiches, boissons, desserts } from './constArticles';

const initialState = {
    sandwiches: sandwiches,
    desserts: desserts,
    boissons: boissons,
    // menus: {},
    currentPrice: 0,
};

// eslint-disable-next-line
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_SANDWICH':
            return {
                ...state,
                sandwiches: state.sandwiches.map(sandwich =>
                    sandwich.id === action.id
                        ? { ...sandwich, quantity: sandwich.quantity + 1 }
                        : sandwich,
                ),
                currentPrice: state.currentPrice + action.price,
            }

        case 'REMOVE_SANDWICH':
            return {
                ...state,
                sandwiches: state.sandwiches.map(sandwich =>
                    sandwich.id === action.id
                        ? { ...sandwich, quantity: sandwich.quantity - 1 }
                        : sandwich,
                ),
                currentPrice: state.currentPrice - action.price,
            }
        case 'ADD_DESSERT':
            return {
                ...state,
                desserts: state.desserts.map(dessert =>
                    dessert.id === action.id
                        ? { ...dessert, quantity: dessert.quantity + 1 }
                        : dessert,
                ),
                currentPrice: state.currentPrice + action.price,
            }

            case 'REMOVE_DESSERT':
                return {
                    ...state,
                    desserts: state.desserts.map(sandwich =>
                        sandwich.id === action.id
                            ? { ...sandwich, quantity: sandwich.quantity - 1 }
                            : sandwich,
                    ),
                    currentPrice: state.currentPrice - action.price,
                }

        case 'ADD_BOISSON':
            return {
                ...state,
                boissons: state.boissons.map(dessert =>
                    dessert.id === action.id
                        ? { ...dessert, quantity: dessert.quantity + 1 }
                        : dessert,
                ),
                currentPrice: state.currentPrice + action.price,
            }

            case 'REMOVE_BOISSON':
                return {
                    ...state,
                    boissons: state.boissons.map(sandwich =>
                        sandwich.id === action.id
                            ? { ...sandwich, quantity: sandwich.quantity - 1 }
                            : sandwich,
                    ),
                    currentPrice: state.currentPrice - action.price,
                }

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}
