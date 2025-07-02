import StatisticLine from "./StatisticLine";

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  if (!good && !neutral && !bad) return <p>No feedback given</p>;

  const all = good + neutral + bad;

  const average = (good - bad) / (good + neutral + bad);

  const positive = (good / (good + neutral + bad)) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} sign="%" />
      </tbody>
    </table>
  );
};

export default Statistics;
