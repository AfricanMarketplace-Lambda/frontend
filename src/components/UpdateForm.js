import React from 'react';
import { updateItem } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const UpdateForm = () =>{
    const { push } = useHistory();


    const onChange = () =>{
        
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        updateItem();
        // push('')//will push to items component;
    }

    return(
       <div>
            <div>Edit Item</div>
            <form>

                <label>Name
                    <input 
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={}
                        onChange={}
                    />
                
                </label>
                

                <label>Description
                    <input 
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={}
                        onChange={}
                    />
                
                </label>

                <label>Price
                    <input 
                        type='text'
                        name='title'
                        placeholder='Title'
                        value={}
                        onChange={}
                    />
                
                </label>

                <label>
                    <select onChange={onChange} value={formValues.category} name="category">
                        <option value="">- Select a category -</option>
                    </select>
                </label>

                <button onClick={handleSubmit}>Update</button>

            </form>
       </div> 
    )
};

export default UpdateForm;