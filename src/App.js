import React from 'react';
import './App.css';
import { Provider, useAtom } from 'jotai';
// atoms
import { countAtom } from './Atoms';
import { countryAtom } from './Atoms';

// components
const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  const handleClick = () => setCount((value) => value + 1)

  return (
    <>
      <h1>{count} </h1>
      <button onClick={handleClick}>one up</button>
    </>
  );
};

const Country = () => {
  const [text, setText] = useAtom(countryAtom);
  const handleInput = (e) => setText(e.target.value);

  return (
    <>
      <h2>Normal: {text}</h2>
      <h2>Uppercase: {text.toUpperCase()}</h2>
      <input value={text} onChange={handleInput} />
    </>
  );
};


const App = () => {
  return (
    <Provider>
      <div className="App">
        <Counter />
        <hr />
        <Country />
      </div>
    </Provider>
  );
}

export default App;
