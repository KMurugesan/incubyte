import React, { useRef, useState } from 'react';

import { addString } from './helpers';
import './App.css';

const App = () => {
  const inputRef = useRef('');
  const [addedValue, setAddedValue] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  const handleStirngAdd = () => {
    const { totalValue, errorMsg } = addString(inputRef?.current?.value) || {};

    if (totalValue !== addedValue) {
      setAddedValue(totalValue);
    }

    if (errorMsg) {
      setErrorMsg(errorMsg);
    } else {
      setErrorMsg('');
    }
  };

  return (
    <div className="App">
        <input type="text" ref={inputRef} className="user-input" />
        <button onClick={() => handleStirngAdd()} className="user-button">Add</button>
        <div className='added-value'>
          {'User inputted string was added to: '}{addedValue}
        </div>
        {!!(errorMsg) && (
          <div className='added-value'>
            {errorMsg}
          </div>
        )}
    </div>
  );
}

export default App;
