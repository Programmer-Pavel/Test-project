import axios from 'axios';
import { proxy } from 'valtio';
import { Auth } from '../../api';
import { AuthStateType } from './authStateType';

export const authState = proxy<AuthStateType>({
  accessToken: '',
  errMessage: '',

  setAuth: (value) => {
    authState.accessToken = value;
  },

  login: async (userName, password) => {
    if (userName && password) {
      try {
        const response = await Auth.login(userName, password);
        authState.accessToken = response?.data?.access_token;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (!err?.response?.status) {
            authState.errMessage = 'Ошибка сервера';
          } else if (err.response?.status === 400) {
            authState.errMessage = 'Пропущен email или пароль';
          } else if (err.response?.status === 401) {
            authState.errMessage = 'Неверный email или пароль';
          } else {
            authState.errMessage = 'Ошибка авторизации';
          }
        } else {
          throw new Error('Неизвестная ошибка');
        }
      }
    } else {
      authState.errMessage = 'Вы не заполнили поле email или пароль';
    }

    setTimeout(() => {
      authState.errMessage = '';
    }, 2000);
  },

  logout: () => {
    authState.accessToken = '';
  },
});
