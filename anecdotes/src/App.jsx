import { useState } from 'react';
import Title from './components/Title';
import './styles.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const initialVotes = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);
  const [longestVote, setLongestVote] = useState(0);

  const handleClick = (type) => {
    if (type === 'anecdotes') {
      const random = Math.floor(Math.random() * anecdotes.length);
      setSelected(random);
    }

    if (type === 'votes') {
      const copy = [...votes];
      copy[selected]++;
      setVotes(copy);

      const longest = Math.floor(Math.max(...copy));
      setLongestVote(longest);
    }
  };

  return (
    <>
      <Title name='Anecdote of the day' />
      <span>{anecdotes[selected]}</span>
      <span>has {votes[selected]} votes</span>
      <button type='button' onClick={() => handleClick('votes')}>
        vote
      </button>
      <button type='button' onClick={() => handleClick('anecdotes')}>
        next anecdotes
      </button>
      <Title name='Anecdote with most vote' />
      {!longestVote ? (
        <span>There are no votes yet</span>
      ) : (
        <>
          <span>{anecdotes[votes.indexOf(longestVote)]}</span>
          <span>has {longestVote} votes</span>
        </>
      )}
    </>
  );
};

export default App;
