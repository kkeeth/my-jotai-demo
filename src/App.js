import React, { Suspense } from 'react';
import './App.css';
import { Provider, useAtom } from 'jotai';
// atoms
import { countAtom, countryAtom, isPrimaryAtom } from './Atoms';


// components
const Counter = () => {
  const [count, setCount] = useAtom(countAtom)
  const handlePlus = () => setCount((value) => value + 1)
  const handleMinus = () => setCount((value) => value - 1)

  return (
    <>
      <h1>{count} </h1>
      <div className="buttons">
        <button onClick={handlePlus}>one up</button>
        <button onClick={handleMinus}>one down</button>
      </div>
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

const ColorButton = () => {
  const [isPrimary, setIsPrimary] = useAtom(isPrimaryAtom);
  const title = isPrimary ? "Primary" : "Secondary";

  const handleClick = () => setIsPrimary(!isPrimary);

  return (
    <button
      className={ isPrimary ? "primary-button" : "secondary-button"}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

const App = () => {
  return (
    <Provider>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Counter />
          <hr />
          <Country />
          <hr />
          <ColorButton />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
