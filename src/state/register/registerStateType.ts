export interface RegisterStateType {
  errMessage: string;
  successMessage: string;

  register: (email: string, password: string) => Promise<void>;
}
