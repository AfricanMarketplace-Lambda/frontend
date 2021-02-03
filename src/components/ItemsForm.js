import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { addItem } from '../actions';

const initialValues = {
    name: '', 
    description: '', 
    price: '', 
    catergory_id: ''
}

const ItemsForm = () => {
const [formValues, setFormValues] = useState(initialValues); 
const { push } = useHistory();

//Helper Functions 
const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
};

const onSubmit = (e) => {
    e.preventDefault();
    if(formValues.name && formValues.description && formValues.price && formValues.catergory_id){
        addItem(formValues)
        setFormValues({
            name: '', 
            description: '', 
            price: '', 
            catergory_id: ''
        })
        push();// will push to component with items listings
    } else{
        console.log('error in submitting form');
    }
};

    return (
        <form onSubmit={onSubmit}>
            <label>
            Name
            <input
            name=''
            onChange={onChange}
            value={formValues.name}
            />
            </label>
            <label>
            Description
            <input
            name=''
            onChange={onChange}
            value={formValues.description}
            />
            </label>
            <label>
            Price
            <input
            name=''
            onChange={onChange}
            value={formValues.price}
            />
            </label>
            <label>
            <select onChange={onChange} value={formValues.category} name="category">
            <option value="">- Select a category -</option>
          </select>
            </label>
        <button>Add Item</button>
        </form>
    )
}

export default ItemsForm; 