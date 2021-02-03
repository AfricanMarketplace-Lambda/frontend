import React from 'react'; 
import { useHistory, useParams } from 'react-router-dom';

const Item = ({item}) => {
    console.log(item)
    const { push } = useHistory();
    const { id } = useParams();

    const handleEditClick = () =>{
        push(`item-edit/${id}`)
    }

    return (
        <div className="item-wrapper">
            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Price:${item.price}</p>
            <div className='buttons'>
                <button className='edit-btn' onClick={handleEditClick} >Edit Item</button>
                <button className='delete-btn'>Delete Item</button>
            </div>
        </div>
    )
}

export default Item; 