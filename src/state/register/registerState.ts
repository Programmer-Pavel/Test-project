import axios from 'axios';
import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import { Auth } from '../../api';
import { RegisterStateType } from './registerStateType';

export const registerState = proxy<RegisterStateType>({
  errMessage: '',
  successMessage: '',

  register: async (userName, password) => {
    if (userName && password) {
      try {
        await Auth.register(userName, password);
        registerState.successMessage = 'Вы успешно зарегистрированы';
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (!err?.response?.status) {
            registerState.errMessage = 'Ошибка сервера';
          } else if (err.response?.status === 400) {
            registerState.errMessage = 'Пропущен email или пароль';
          } else if (err.response?.status === 409) {
            registerState.errMessage = 'Пользователь с таким email уже зарегистрирован';
          } else {
            registerState.errMessage = 'Ошибка регистрации';
          }
        } else {
          throw new Error('Неизвестная ошибка');
        }
      }
    } else {
      registerState.errMessage = 'Вы не заполнили поле email или пароль';
    }

    setTimeout(() => {
      registerState.successMessage = '';
      registerState.errMessage = '';
    }, 4000);
  },
});

const unsub = devtools(registerState, { name: 'authState', enabled: true });
