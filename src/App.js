import './App.css';
import { Provider, atom, useAtom } from 'jotai';

// atoms
const countAtom = atom(0);

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

const App = () => {
  return (
    <Provider>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
