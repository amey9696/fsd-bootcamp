import React, { useState } from 'react'
import Menu from './Menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

//remove duplicate category from array
const allCatValues = [...new Set(Menu.map((curEleme) => curEleme.category))];
// console.log(allCatValues);

const Gallery = () => {
    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems]=useState(allCatValues);
    
    const filterItem = (category) => {

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <div className="m-3 text-center main-heading">
                <input type="text" className="m-3 search-field" placeholder="Search"/>
                <button className="search"><i class="fas fa-search"></i></button>
            </div>
            <hr />
            <CatMenu filterItem={filterItem} catItems={catItems}/>
            <MenuItems items={items} />
        </>
    )
}

export default Gallery;