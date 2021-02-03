//export const functionName = param => {
//     return({type: "ACTION_NAME", payload: param});
// }

import axios from "axios";

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAIL = "FETCH_ITEMS_FAIL";

export const getItems = () => (dispatch) => {
  dispatch({ type: FETCH_ITEMS_START });
  axios
    .get("https://tt17-african-marketplace.herokuapp.com/api/items")
    .then((res) => {
      dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ITEMS_FAIL, payload: err });
    });
};
