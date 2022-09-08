const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ object1, object2, object3 }) => {
  return (
    <>
      <Part part={object1.name} exercises={object1.exercises} />
      <Part part={object2.name} exercises={object2.exercises} />
      <Part part={object3.name} exercises={object3.exercises} />
    </>
  );
};

const Total = ({ total }) => {
  return <p>{`Number of exercises ${total}`}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const {
    name,
    parts: [object1, object2, object3],
  } = course;

  return (
    <>
      <Header name={name} />
      <Content object1={object1} object2={object2} object3={object3} />
      <Total
        total={object1.exercises + object2.exercises + object3.exercises}
      />
    </>
  );
};

export default App;
