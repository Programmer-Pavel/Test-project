import { faFloppyDisk, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { contactsState } from '../state';
import { ContactsResponse } from '../types/contactsResponse';
import { Button, Flex, Input } from '../ui-kit';

export const ContactItem = ({ id, name }: ContactsResponse) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(name);

  const { editContact, deleteContact } = useSnapshot(contactsState);

  useEffect(() => {
    setInputValue(name);
  }, [name]);

  const onSaveContactBtn = () => {
    void editContact({ id, name: inputValue });
    setInputValue('');
    setEditMode(false);
  };

  const onDeleteContactBtn = () => {
    void deleteContact(id);
  };

  return (
    <>
      {editMode ? (
        <Input
          width="100%"
          height="30px"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          setValue={setInputValue}
        />
      ) : (
        name || '-'
      )}

      <Flex ml="40px">
        {editMode ? (
          <Button
            width="40px"
            visual="tertiary"
            iconOnly
            icon={<FontAwesomeIcon icon={faFloppyDisk} />}
            onClick={onSaveContactBtn}
          />
        ) : (
          <Button
            width="40px"
            visual="tertiary"
            iconOnly
            icon={<FontAwesomeIcon icon={faPenToSquare} />}
            onClick={() => setEditMode(true)}
          />
        )}

        <Button
          width="40px"
          visual="tertiary"
          iconOnly
          icon={<FontAwesomeIcon icon={faTrash} />}
          onClick={onDeleteContactBtn}
        />
      </Flex>
    </>
  );
};
