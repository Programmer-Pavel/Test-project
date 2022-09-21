import { ContactsResponse } from '../../types';

export interface ContactsStateType {
  contacts: ContactsResponse[];

  getContacts: () => Promise<void>;
  addContact: (newContact: ContactsResponse) => Promise<void>;
  editContact: (contact: ContactsResponse) => Promise<void>;
  deleteContact: (id: number) => Promise<void>;
}
