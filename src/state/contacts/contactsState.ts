import { proxy } from 'valtio';
import { Contacts } from '../../api';
import { ContactsStateType } from './contactsStateType';

export const contactsState = proxy<ContactsStateType>({
  contacts: [],

  getContacts: async () => {
    try {
      const response = await Contacts.getContacts();
      contactsState.contacts = response.data;
    } catch (err) {
      console.log(err);
    }
  },

  addContact: async (newContact) => {
    try {
      await Contacts.addContact(newContact);
      await contactsState.getContacts();
    } catch (err) {
      console.log(err);
    }
  },

  editContact: async (contact) => {
    try {
      await Contacts.editContact(contact);
      await contactsState.getContacts();
    } catch (err) {
      console.log(err);
    }
  },

  deleteContact: async (id) => {
    try {
      await Contacts.deleteContact(id);
      await contactsState.getContacts();
    } catch (err) {
      console.log(err);
    }
  },
});
