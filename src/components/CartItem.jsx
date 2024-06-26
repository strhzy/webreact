import React from 'react'
import Item from './Item'
import axios from 'axios'

const CartItem = (props) => {

    const onSearch = (inputValue) => {
        props.setSearch(inputValue.target.value);
    }

    const onAddOverlay = (obj) => {
        try{
            if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                props.setoverlayItems((over)=>over.filter(item => Number(item.id) !== Number(obj.id)));
            }
            else{
                axios.post('http://localhost:3001/overlays', obj);
                props.setoverlayItems([...props.overlayItems, obj]);
            }
        }
        catch{
            alert('Error');
        }
    }

    return (
        <div>
            <div>
                <input onChange={onSearch} placeholder='Поиск'></input>
            </div>
            {
                props.item
                .filter((item) => item.name.toString().toLowerCase().includes(props.search.toString().toLowerCase()))
                .map(obj => {
                    return(
                        <Item
                            key={obj.id}
                            id={obj.id}
                            name={obj.name}
                            description={obj.description}
                            price={obj.price}

                            onPlus = {(cartObj) => onAddOverlay(cartObj)}
                        />
                    )
                })
            }
        </div>
    )
}

export default CartItem
