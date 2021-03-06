import {
  FETCH_ITEMS_FAIL,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  // DELETE_ITEM
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
        isFetching: false,
      };

    case FETCH_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload,
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

      // case DELETE_ITEM:
      // return{
      //   ...state,
      //   items: action.payload.filter((item) =>{
      //     return(item.id !== action.payload.id)})
      // };

      // action.payload: {id: 1, name: "Polished thang! ", description: "Valuable handcrafted stone.", price: 25, category_id: 1}
      // name: action.payload.name, 
      // description: action.payload.description, 
      // price: action.payload.price, 
      // category_id: action.payload.category_id
      // case EDIT_ITEM_SUCCESS:
      // return {
      //   ...state, 
      //   items: state.items.map(item => {
      //     if (item.id === action.payload.id){
      //       return action.payload;
      //     } else{
      //       return item;
      //     }
      //   })
      // }

      // case EDIT_ITEM_FAIL:
      // return {
      //   ...state,
      //   error: action.payload
      // };
      
    default:
      return state;
  }
};

export default reducer; 