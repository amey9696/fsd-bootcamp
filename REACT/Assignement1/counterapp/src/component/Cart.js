import React, {createContext, useEffect, useReducer} from 'react';
import './style.css';
import Contcart from './Contcart';
import {quantity} from "./Products";
import { reducer } from './reducer';

export const CartContext=createContext();
 
// create state
const initialState={
    item:quantity,
    totalItem:0, 
};

function Cart(){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    //delete items
    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id
        });
    };

    //clear cart
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_CART"
        });
    }

    //Increment Items
    const increment=(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id,
        });
    };

    //Decrement Items
    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id,
        });
    };

    //reload cart
    const reload=()=>{
        return dispatch({
            type:"RELOAD_CART"
        }); 
    }
    //updating the cart
    useEffect(() => {
        dispatch({
            type:"GET_TOTAL"
        });
    }, [state.item]);

    return (
        <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement,reload}}> 
            <Contcart/>
        </CartContext.Provider>
    )
}
export default Cart