import React, {useState} from 'react';

const initialValues = {
    name: '', 
    description: '', 
    price: '', 
    catergory_id: ''
}

const ItemsForm = () => {
const [formValues, setFormValues] = useState(initialValues); 

//Helper Functions 
const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
};

const onSubmit = (e) => {
};

    return (
        <form onSubmit={onSubmit}>
            <label>
            Name
            <input
            name=''
            onChange={onChange}
            value={}
            />
            </label>
            <label>
            Description
            <input
            name=''
            onChange={onChange}
            value={}
            />
            </label>
            <label>
            Price
            <input
            name=''
            onChange={onChange}
            value={}
            />
            </label>
            <label>
            <select onChange={onChange} value={values.category} name="category">
            <option value="">- Select a category -</option>
          </select>
            </label>
        <button>Add Item</button>
        </form>
    )
}

export default ItemsForm; 