import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="Hello" />
      <Section>This is my Section.</Section>
      <Counter setCount={setCount}>Count is: {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
};

export default App;
