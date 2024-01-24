import Counter from "./Counter";
import { CounterProvider, initState } from "./context/CounterContext";

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count:{num}</>}</Counter>
      </CounterProvider>
    </>
  );
};
export default App;
