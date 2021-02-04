import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAIL = "FETCH_ITEMS_FAIL";
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';
export const DELETE_ITEM = 'DELETE_ITEM';

export const getItems = () => (dispatch) => {
  dispatch({ type: FETCH_ITEMS_START });
  axiosWithAuth()
    .get("/api/items")
    .then((res) => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ITEMS_FAIL, payload: err.message });
    });
};

export const addItem = (item) => (dispatch) =>{
    axiosWithAuth().post(`/api/items/`, item)
    .then((res) =>{
        dispatch({type: ADD_ITEM_SUCCESS, payload: res.data})
    })
    .catch((err) =>{
        dispatch({type: ADD_ITEM_FAIL, payload: err.message});
    })
};


export const deleteItem = (item) => (dispatch) =>{
    axiosWithAuth().delete(`/api/items/${item.id}`, item)
    .then((res) =>{   
        dispatch({type:DELETE_ITEM, payload: res.message})
    })
    // .catch((err) =>{
    //     dispatch({type: DELETE_ITEM_FAIL, payload: err.message})
    // })
};
