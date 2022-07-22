import './App.css';
import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Box, Button, Input } from './ui-kit';
import { IconPlusLarge } from './assets';
import { RInput } from './ui-kit/components/rebass-input';

function App() {
  const [value, setValue] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Button
        visual="tertiary"
        size="large"
        icon={<IconPlusLarge color="#F47920" />}
      >
        test
      </Button>

      <RInput
        onChange={onInputChange}
        setValue={setValue}
        value={value}
        width="300px"
        border="1px solid red"
        bg="red"
        color="white"
      />
    </div>
  );
}

export default App;
