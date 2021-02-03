import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_START,
} from "../actions";

export const initialState = {
  isFetching: false,
  items: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        isFetching: true,
        items: [],
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        error: "error in the reducer",
      };
    default:
      return state;
  }
};

export default reducer; 