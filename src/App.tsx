import './App.css';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Box, Button, Input } from './ui-kit';
import { IconPlusLarge } from './assets';
import { Flex } from './ui-kit/components/base/Flex';

export const App = () => {
  const [value, setValue] = useState<string>('');

  const theme = useTheme();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Button icon={<IconPlusLarge color={theme.colors.white} />}>test</Button>

      <Input
        onChange={onInputChange}
        setValue={setValue}
        value={value}
        width="300px"
      />

      <Flex
        height="100px"
        bg="green"
      >
        <Box bg="yellow">dd</Box>
        <Box
          bg="blue"
          color="white"
        >
          ss
        </Box>
      </Flex>
    </div>
  );
};
