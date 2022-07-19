import './App.css';
import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Button } from './ui-kit';
import { IconPlusLarge, IconPlusSmall } from './assets';

function App() {
  return (
    <div className="App">
      <Button
        visual="tertiary"
        size="large"
        icon={<IconPlusLarge color="#F47920" />}
      >
        test
      </Button>
    </div>
  );
}

export default App;
