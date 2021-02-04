import React from 'react'; 
import { useHistory} from 'react-router-dom';
import { deleteItem } from '../actions';

const Item = ({item}) => {
    const { push } = useHistory();
    const handleEditClick = () =>{
        push(`/update-items/${item.id}`)
    }

    const handleDeleteClick = () =>{
        deleteItem();
        push('/items')
    }

    return (
        <div className="item-wrapper">
            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Price:${item.price}</p>
            <div className='buttons'>
                <button className='edit-btn' onClick={handleEditClick} >Edit Item</button>
                <button className='delete-btn' onClick={handleDeleteClick}>Delete Item</button>
            </div>
        </div>
    )
}

export default Item; 