import React, { useEffect } from "react";
import { getItems } from "../actions";
import { connect } from "react-redux";
import Item from './Item'; 
import { useHistory } from "react-router-dom";

const Items = ({isFetching, items, error, getItems}) => {
  const { push } = useHistory();
  useEffect(() => {
    getItems();
  }, []);

  if (error) {
    return <h2>We have an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Getting items.....</h2>;
  }

  

  const handleAddClick = () =>{
    push('/add-item')
  }

  return (
      <div className="items-wrapper">
          <h1>In Season and In Stock!</h1>
          <button onClick={handleAddClick}>Add an Item</button>
          {items.map(item => {
            return(
                <Item item={item} key={item.id}/>
            )    
          })}
      </div>
  )
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    items: state.items,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getItems })(Items);
