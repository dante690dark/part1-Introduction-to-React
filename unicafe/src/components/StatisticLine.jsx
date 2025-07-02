const StatisticLine = ({ text, value, sign = "" }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{sign}</td>
    </tr>
  );
};

export default StatisticLine;
