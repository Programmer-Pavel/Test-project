export interface AuthStateType {
  accessToken: string;
  errMessage: string;

  setAuth: (value: string) => void;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
