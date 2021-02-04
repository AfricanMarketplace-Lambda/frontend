import React, { useEffect } from "react";
import { getItems } from "../actions";
import { connect } from "react-redux";
import Item from './Item'; 
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core/index";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root:{
    marginTop: 30
  },
})

const Items = ({isFetching, items, error, getItems}) => {
  const { push } = useHistory();
  const classes = useStyles();

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
          <h2>In Season and In Stock!</h2>
          <div className="items-card-container">
          {items.map(item => {
            return(
              <Item item={item} key={item.id}/>
              )    
            })}
          </div>
            <Button className={classes.root} variant="contained" color="primary"onClick={handleAddClick}>Add an Item</Button>
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
