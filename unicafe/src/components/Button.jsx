const Button = ({ text, setState }) => {
  const handleButton = () => setState((prevState) => prevState + 1);

  return (
    <>
      <button type="button" onClick={handleButton}>
        {text}
      </button>
    </>
  );
};

export default Button;
