import { AxiosResponse } from 'axios';
import axios from '../configs/axios';
import { AuthResponse } from '../types';

export class Auth {
  static login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axios.post<AuthResponse>('/api/auth/login', { email, password });
  }

  static register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axios.post<AuthResponse>('/api/auth/register', { email, password });
  }
}
