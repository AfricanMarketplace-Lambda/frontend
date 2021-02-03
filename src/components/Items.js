import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { getItems } from "../actions";
import { connect } from "react-redux";
import Item from './Item'; 

const Items = ({isFetching, items, error, getItems}) => {
  useEffect(() => {
    getItems();
  }, []);

  console.log(items)

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Getting items.....</h2>;
  }

  return (
      <div className="items-wrapper">
          <h1>In Season and In Stock!</h1>
          {items.map(item => {
            return(
              <Link to={`/api/items/${item.id}`}>
                <Item item={item} key={item.id}/>
              </Link>
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
// Import: getItems, fetch items-fail-success-start
