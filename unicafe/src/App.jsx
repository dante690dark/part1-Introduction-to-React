import { useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';
import Title from './components/Title';
import './styles.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Title text='give feedback' />
      <Button text='good' setState={setGood} />
      <Button text='neutral' setState={setNeutral} />
      <Button text='bad' setState={setBad} />
      <Title text='Statistics' />
      <Statistics feedback={{ good, neutral, bad }} />
    </>
  );
};

export default App;
