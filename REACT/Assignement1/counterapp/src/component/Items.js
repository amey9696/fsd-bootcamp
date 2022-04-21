import React, {useContext} from 'react';
import { CartContext } from './Cart';

function Items({id, quantity}){ 
    const {removeItem, increment, decrement} = useContext(CartContext) 
    return (
        <>
            <div class="result-container">
                <div class="num">{quantity}</div>
                <div><i class="fas fa-plus-circle" onClick={()=>increment(id)}></i></div>
                <div><i class="fas fa-minus-circle"  onClick={()=>decrement(id)}></i></div>
                <div><i class="far fa-trash-alt" onClick={()=>removeItem(id)}></i></div>
            </div>
        </>
    )
}

export default Items;