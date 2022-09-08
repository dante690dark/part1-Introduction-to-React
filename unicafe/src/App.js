import React, { useState } from "react";

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {text} {value}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      {!good && !neutral && !bad ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good + bad * -1) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={(good * 100) / (good + neutral + bad) + "%"}
          />
        </>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood((prevState) => prevState + 1);
  };
  const handleClickNeutral = () => {
    setNeutral((prevState) => prevState + 1);
  };
  const handleClickBad = () => {
    setBad((prevState) => prevState + 1);
  };

  return (
    <>
      <Title title="give feedback" />
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Title title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
