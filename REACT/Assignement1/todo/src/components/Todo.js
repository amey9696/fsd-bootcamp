import React, { useEffect, useState } from 'react'

const getLocalItems=()=>{
    let list=sessionStorage.getItem('lists');
    // console.log(list);

    if(list){
        return JSON.parse(sessionStorage.getItem('lists'));
    }
    else{
        return [];
    }
}

const Todo = () => {
    const [input, setInput]=useState(''); 
    const [items,setItmems]=useState(getLocalItems()); 
    const [toggleSubmit, setToggleSubmit]=useState(true);
    const [edit,setEdit]=useState(null);

    //add item in list
    const addItem=()=>{
        if(!input){
            alert("plz fill item");
        }else if(input && !toggleSubmit){
            setItmems(
                items.map((elem)=>{
                    if(elem.id===edit){
                        return{...elem, name:input}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInput('');
            setEdit(null);
        }
        else{
            const allInputData={id:new Date().getTime().toString(), name:input}
            setItmems([...items,allInputData]);
            setInput('');
        }
    }
    
    //delete particular items
    const deleteItem=(index)=>{
        const updatedItems=items.filter((elem)=>{
            return index!==elem.id;
        });
        setItmems(updatedItems);
    }

    //edit items
    const editItem=(id)=>{
        let newEditItem=items.find((elem)=>{
            return elem.id===id;
        });
        setToggleSubmit(false);
        setInput(newEditItem.name);
        setEdit(id);
    }

    useEffect(()=>{
        sessionStorage.setItem('lists',JSON.stringify(items))
    },[items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                   <h1>Add your Todo here 👇</h1>
                    
                    <div className="addItems">
                        <input type="text" placeholder="Add Items Here ✍️" 
                            value={input} onChange={(e)=>setInput(e.target.value)}
                        />
                        {
                            toggleSubmit ?  <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> : <i class="fas fa-edit add-btn" title="update Item" onClick={addItem}></i>
                        }
                       
                    </div>
                    
                    <div className="showItems">
                        {
                            items.map((elem)=>{
                                return(
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i class="fas fa-edit add-btn" title="update Item" onClick={()=>editItem(elem.id)}></i>
                                            <i class="fas fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;