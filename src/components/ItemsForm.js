import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { addItem } from '../actions';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    id: Date.now(),
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
    axiosWithAuth().post('/api/items', formValues)
    .then((res) =>{
        addItem(formValues)
        setFormValues(initialValues)
        push('/items');
    })
    .catch((err) =>{
        console.log(err)
    })
};

    return (
        <form onSubmit={onSubmit}>
            <label>
            Name
            <input
            name='name'
            onChange={onChange}
            value={formValues.name}
            />
            </label>
            <label>
            Description
            <input
            name='description'
            onChange={onChange}
            value={formValues.description}
            />
            </label>
            <label>
            Price
            <input
            name='price'
            onChange={onChange}
            value={formValues.price}
            />
            </label>
            <label>
            <select onChange={onChange} value={formValues.catergory_id} name="category">
            <option value="">- Select a category -</option>
            <option value="home">Home Improvement</option>
            <option value="decor">Decorations</option>
          </select>
            </label>
        <button>Add Item</button>
        </form>
    )
};

const mapStateToProps = (state) =>{
    return{
        items: state.items 
    }
}

export default connect( mapStateToProps, {addItem}) (ItemsForm); 