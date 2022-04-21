import React, {useContext} from 'react';
import './style.css';
import Items from './Items';
import { CartContext } from './Cart';

function Contcart() {
    const {item, clearCart, reload, totalItem} = useContext(CartContext);
    return (
         <div className="container">
            <div className="flex-container">
                <div className="cart"><i className="fas fa-shopping-cart"></i></div>
                <div className="item">{totalItem}</div>
                <div className="item-name">Items</div>
            </div>
            <div className="button-container">
                <div><i className="fas fa-sync" onClick={()=>reload()}></i></div>
                <div><i className="fab fa-dropbox" onClick={()=>clearCart()}></i></div>
            </div>

            <div>
                <div className="cart-items-container">
                        {
                            item.map((curItem)=>{
                                return <Items key={curItem.id} {...curItem} /> 
                            })
                        }
                </div>                
            </div>
        </div>
    )
}
export default Contcart;