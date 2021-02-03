import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  // EDIT_ITEM_SUCCESS,
  // EDIT_ITEM_FAIL,
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

    case ADD_ITEM_SUCCESS:
      return{
        ...state,
        items: [...state.items, action.payload]
      };

      case ADD_ITEM_FAIL:
      return{
        ...state,
        error: action.payload
      };

      case DELETE_ITEM_SUCCESS:
      return{
        ...state,
        items: action.payload.filter(item => item.id !== action.payload)
      };

      case DELETE_ITEM_FAIL:
      return{
        ...state,
        error: action.payload
      };


      // Will need to figure out how to do this
      // case EDIT_ITEM_SUCCESS:
      // return{
      //   ...state,
        
      // };

      // case EDIT_ITEM_FAIL:
      // return{
      //   ...state,
      //   error: action.payload
      // };


    default:
      return state;
  }
};

export default reducer; 