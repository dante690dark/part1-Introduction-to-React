import { useState } from "react";

const Header = ({ title }) => {
  return <h2>Anecdote {title}</h2>;
};

const LargestVote = ({ votes, anecdotes }) => {
  const maxVoteCount = Math.max(...votes);
  const indexMaxVotes = votes.indexOf(maxVoteCount);

  return (
    <>
      <Header title="with most votes" />

      {maxVoteCount > 0 ? (
        <>
          {anecdotes[indexMaxVotes]} <br />
          {maxVoteCount}
        </>
      ) : (
        "no votes yet"
      )}
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const intialValue = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(intialValue);

  const handleClickAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };

  const handleClickVote = () => {
    setVotes((prevState) => {
      const newState = [...prevState];
      newState[selected] += 1;
      return newState;
    });
  };

  return (
    <>
      <Header title="of the day" />
      {anecdotes[selected]} <br />
      has {votes[selected]} votes
      <br />
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickAnecdote}>next anecdote</button> <br />
      <LargestVote votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
