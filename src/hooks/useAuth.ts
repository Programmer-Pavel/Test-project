import { useSnapshot } from 'valtio';
import { authState } from '../state';

export const useAuth = () => {
  const { accessToken } = useSnapshot(authState);

  return {
    isAuth: !!accessToken,
    accessToken,
  };
};
