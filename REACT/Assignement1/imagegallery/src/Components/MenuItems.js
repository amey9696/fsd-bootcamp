import React from 'react'

const MenuItems = ({items}) => {
    // console.log(catItems)
    return (
        <>
            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <h1>Image</h1>
                        <div className="row my-5">
                            {
                                items.map((elem)=>{
                                    const {id,image}=elem;
                                    return (
                                        <div className="item1 m-3" key={id}>
                                            <div className="row Item-inside">
                                                <div className="img-div">
                                                    <img src={image} className="img-fluid"/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default MenuItems;