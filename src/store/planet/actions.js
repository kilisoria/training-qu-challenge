import * as types from './actionTypes';
import * as swapiService from '../../services/swapiService';

export const planetsRequest = () => {
  return {
    type: types.PLANETS_BEGIN,
  };
};

export const planetsSuccess = planets => {
  return {
    type: types.PLANETS_SUCCESS,
    planets,
  };
};

export const planetsError = message => {
  return {
    type: types.PLANETS_FAILED,
    message,
  };
};

// Action Creators
export const getPlanets = () => {
  return async dispatch => {
    dispatch(planetsRequest());

    try {
      const responseData = await swapiService.getPlanets();
      const { data } = responseData;
      const { results: planets } = data;
     
      dispatch(planetsSuccess(planets));
    } catch (err) {
      dispatch(planetsError(err.message));
    }
  };
};

