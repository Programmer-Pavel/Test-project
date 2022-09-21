import { AxiosResponse } from 'axios';
import axios from '../configs/axios';
import { ContactsResponse } from '../types/contactsResponse';

export class Contacts {
  static getContacts(): Promise<AxiosResponse<ContactsResponse[]>> {
    return axios.get<ContactsResponse[]>(`${process.env.REACT_APP_API as string}/contacts`);
  }

  static addContact({ id, name }: ContactsResponse): Promise<AxiosResponse<void>> {
    return axios.post(`${process.env.REACT_APP_API as string}/contacts`, { id, name });
  }

  static editContact({ id, name }: ContactsResponse): Promise<AxiosResponse<void>> {
    return axios.put(`${process.env.REACT_APP_API as string}/contacts/${id}`, { name });
  }

  static deleteContact(id: number): Promise<AxiosResponse<void>> {
    return axios.delete(`${process.env.REACT_APP_API as string}/contacts/${id}`);
  }
}
