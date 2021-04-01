import * as types from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PLANETS_BEGIN:
      return {
        ...state,
        ...{
          isFetching: true,
          fetched: false,
        }
      };

    case types.PLANETS_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          fetched: true,
          planets: action.planets
        }
      };

    case types.PLANETS_FAILED:
      return {
        ...state,
        ...{
          isFetching: false,
          fetched: false,
          error: true,
          errorMessage: action.message,
        }
      };

    default:
      return state;
  }
};

export default reducer;