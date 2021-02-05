import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { addItem } from '../actions';
import { connect } from 'react-redux';
import { Button } from "@material-ui/core/index";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const initialValues = {
    // id: Date.now(),
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
const ItemsForm = ({addItem}) => {
const [formValues, setFormValues] = useState(initialValues); 

const { push } = useHistory();
const classes = useStyles();

//Helper Functions 
const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
};

const onSubmit = (e) => {
    e.preventDefault();
    addItem();
    push('/items')
};

    return (
        <form>
 <TextField className={classes.root} id="standard-basic" label="Name" 
            name='name'
            onChange={onChange}
            value={formValues.name}
            />
<TextField className={classes.root} id="standard-basic" label="Description"
            name='description'
            onChange={onChange}
            value={formValues.description}
            />
            <TextField className={classes.root} id="standard-basic" label="Price"
            name='price'
            onChange={onChange}
            value={formValues.price}
            />
            <select onChange={onChange} value={formValues.catergory} name="category">
            <option value="">- Select a category -</option>
            <option value="home">Home Improvement</option>
            <option value="decor">Decorations</option>
          </select>
          <Button className={classes.root} variant="contained" color="default" onClick={onSubmit}>Add Item</Button>
        </form>
    )
};

const mapStateToProps = (state) =>{
    return{
        items: state.items 
    }
}

export default connect( mapStateToProps, {addItem}) (ItemsForm); 