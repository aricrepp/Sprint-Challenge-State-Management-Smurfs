import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS
  } from "../actions/actions";
  
  const initialState = {
      smurfs: [],
      isFetching: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCHING_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload
        };
      default:
        return state;
    }
  };
  