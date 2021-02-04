import React, { useEffect } from "react";
import { getItems } from "../actions";
import { connect } from "react-redux";
import Item from './Item'; 

const Items = ({isFetching, items, error, getItems}) => {
  useEffect(() => {
    getItems();
  }, []);

  if (error) {
    return <h2>We have an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Getting items.....</h2>;
  }

  return (
      <div className="items-wrapper">
          <h1>In Season and In Stock!</h1>
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
