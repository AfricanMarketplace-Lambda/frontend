import React, { useState, useEffect} from 'react';
import axios from 'axios'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const initialItem = {
    name: '', 
    description: '', 
    price: '', 
    catergory_id: ''
}

const UpdateForm = ({items}) =>{
    const [item, setItem] = useState(initialItem);
    let params = useParams();
    const { push } = useHistory();

    useEffect(()=> {
        axios.get(`https://tt17-african-marketplace.herokuapp.com/api/items/${params.id}`)
        .then(res => {
            setItem(res.data)
        })
        .catch(err => {
            console.log('error from updateForm')
        });
    }, [])

//Helper Functions 
const onChange = e => {
    setItem({
        ...item, 
        [e.target.name]: e.target.value
    });
};

const onSubmit = e => {
    e.preventDefault();
    //put request
    axiosWithAuth()
    .put(`api/items/${item.id}`, item)
    .then(res => {
        console.log(res.data)
    })
    // updateItem();
    push('/items')
};

    return (
        <form onSubmit={onSubmit}>
            <label>
            Name
            <input
            name='name'
            onChange={onChange}
            value={item.name}
            />
            </label>
            <label>
            Description
            <input
            name='description'
            onChange={onChange}
            value={item.description}
            />
            </label>
            <label>
            Price
            <input
            name='price'
            onChange={onChange}
            value={item.price}
            />
            </label>
            <label>
            <select onChange={onChange} value={item.catergory_id} name="category">
            <option value="">- Select a category -</option>
            <option value="home">Home Improvement</option>
            <option value="decor">Decorations</option>
          </select>
            </label>
        <button>Update Item</button>
        </form>
    )
}

export default UpdateForm; 