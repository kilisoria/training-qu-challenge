import Amplify, { Auth } from 'aws-amplify';
import { isValidEmail } from '../helpers/fieldHelper';

import {
  AUTH_IDENTITY_POOL_ID,
  AUTH_USER_POOL_ID,
  AUTH_USER_POOL_WEB_CLIENT_ID,
  AUTH_REGION,
} from '../../src/environment';

Amplify.configure({
  Auth: {
    identityPoolId: AUTH_IDENTITY_POOL_ID,
    userPoolId: AUTH_USER_POOL_ID,
    userPoolWebClientId: AUTH_USER_POOL_WEB_CLIENT_ID,
    region: AUTH_REGION,
  },
});

export const signIn = async (email, password) => {
  try {
    const username = email;
    return await Auth.signIn(username, password);
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    return await Auth.signOut();
  } catch (error) {
    throw error;
  }
};

export const verifySession = async () => {
  try {
    return await Auth.currentSession();
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async username => {
  try {
    return await Auth.forgotPassword(username);
  } catch (error) {
    throw error;
  }
};

export const forgotPasswordSubmit = async data => {
  try {
    const forgotPasswordSubmit = await Auth.forgotPasswordSubmit(
      data.email,
      data.code,
      data.newPassword,
    );

    return forgotPasswordSubmit;
  } catch (error) {
    throw error;
  }
};

export const resendSignUp = async username => {
  try {
    return await Auth.resendSignUp(username);
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (user, newPassword) => {
  try {
    const isUserNameAnEmail =
      user && user.username && isValidEmail(user.username);

    if (!isUserNameAnEmail) {
      const phoneNumberAsEmail = `undefined_${user.username}@mail.com`;
      return await Auth.completeNewPassword(user, newPassword, {
        email: phoneNumberAsEmail,
      });
    } else {
      return await Auth.completeNewPassword(user, newPassword, []);
    }
  } catch (error) {
    throw error;
  }
};

export const confirmSignUp = async (username, code) => {
  try {
    return await Auth.confirmSignUp(username, code);
  } catch (error) {
    throw error;
  }
};
