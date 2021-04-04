import {
  get,
} from './service';
import { API_MODELS } from '../resources/constants';

// PLANETS
export const getPlanets = () => {
  return get(`${API_MODELS.PLANETS}/`);
};

export const getPlanetById = async planetId => {
  return get(`${API_MODELS.PLANETS}/${planetId}/`);
};
