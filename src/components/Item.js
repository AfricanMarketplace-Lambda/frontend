import React from 'react'; 
import { useHistory} from 'react-router-dom';
import { deleteItem } from '../actions';
import { Button } from "@material-ui/core/index";

  
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
        <div className="item-card">
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Price:${item.price}</p>
            <div className='buttons'>
            <Button color="primary" onClick={handleEditClick} >Edit Item</Button>
            <Button color="primary" onClick={handleDeleteClick}>Delete Item</Button>
            </div>
        </div>
    )
}

export default Item; 