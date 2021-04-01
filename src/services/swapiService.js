import {
  get,
} from './service';
import { API_MODELS } from '../resources/constants';

// PLANETS
export const getPlanets = () => {
  return get(`${API_MODELS.PATIENT}/profile/`);
};

export const getPlanetById = async sessionId => {
  return get(`${API_MODELS.CAREGIVER}/${API_MODELS.SESSIONS}/${sessionId}/`);
};
