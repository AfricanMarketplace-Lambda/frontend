import React, { useState, useEffect} from 'react';
import axios from 'axios'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "@material-ui/core/index";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const initialItem = {
    name: '', 
    description: '', 
    price: '', 
    catergory_id: ''
}

const useStyles = makeStyles({
    root:{
      marginLeft: 30, 
      marginRight: 30
    },
  })

const UpdateForm = ({items}) =>{
    const [item, setItem] = useState(initialItem);
    let params = useParams();
    const { push } = useHistory();
    const classes = useStyles();

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
            <TextField className={classes.root} id="standard-basic" label="Name" 
            name='name'
            onChange={onChange}
            value={item.name}
            />
            <TextField className={classes.root} id="standard-basic" label="Description" 
            name='description'
            onChange={onChange}
            value={item.description}
            />
            <TextField className={classes.root} id="standard-basic" label="Price" 
            name='price'
            onChange={onChange}
            value={item.price}
            />
            <label>
            <select onChange={onChange} value={item.catergory_id} name="category">
            <option value="">- Select a category -</option>
            <option value="home">Home Improvement</option>
            <option value="decor">Decorations</option>
          </select>
            </label>
        <Button className={classes.root} variant="contained" color="default">Update Item</Button>
        </form>
    )
}

export default UpdateForm; 