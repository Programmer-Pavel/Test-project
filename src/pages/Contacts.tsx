import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { IconPlusLarge } from '../assets';
import { ContactItem } from '../components';
import { authState, contactsState } from '../state';
import { Box, Button, Flex, Input } from '../ui-kit';

export const Contacts = () => {
  const [contact, setContact] = useState<string>('');

  const { contacts, getContacts, addContact } = useSnapshot(contactsState);
  const { logout } = useSnapshot(authState);

  useEffect(() => {
    void getContacts();
  }, [getContacts]);

  const logOut = () => {
    void logout();
  };

  const onAddContactBtn = () => {
    void addContact({ id: contacts.length + 1, name: contact });
    setContact('');
  };

  return (
    <Box
      width="40%"
      minWidth="500px"
    >
      <Button
        onClick={logOut}
        visual="secondary"
      >
        Выйти
      </Button>

      <Flex
        mb="40px"
        mt="50px"
      >
        <Input
          width="100%"
          height="45px"
          onChange={(e) => setContact(e.target.value)}
          value={contact}
          setValue={setContact}
        />

        <Box ml="20px">
          <Button
            icon={<IconPlusLarge />}
            iconSide="right"
            size="small"
            onClick={onAddContactBtn}
            height="45px"
          >
            Добавить
          </Button>
        </Box>
      </Flex>

      {contacts.map((item) => (
        <Box
          height="50px"
          key={item.id}
        >
          <Flex justifyContent="space-between">
            <ContactItem {...item} />
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
