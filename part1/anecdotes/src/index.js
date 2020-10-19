import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = [0, 0, 0, 0, 0, 0]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votesCount, setVotesCount] = useState(props.votes)

  const displayRandomAnecdote = () => {
    const randomChoice = Math.floor(Math.random() * 6)
    setSelected(randomChoice)
  }

  const handleVote = () => {
    const votesCountCopy = [...votesCount]
    votesCountCopy[selected] += 1
    setVotesCount(votesCountCopy)
  }

  const pluralizedVotes = votesCount[selected] === 1
    ? " vote"
    : " votes"

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div> {props.anecdotes[selected]} </div>
      <div>
        <button onClick={displayRandomAnecdote}>
          next anecdote
        </button>
        <button onClick={handleVote}>
          vote for this anecdote
        </button>
        <p>This anecdote has {votesCount[selected] || 0}{pluralizedVotes}.</p>
      </div>
      <h1>Best anecdote ever</h1>
      <div>{props.anecdotes[indexOfMaxVotes(votesCount)]}</div>
    </>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} />,
  document.getElementById('root')
)

function indexOfMaxVotes(votes) {

    let max = votes[0];
    let maxIndex = 0;

    for (let i = 1; i < votes.length; i++) {
        if (votes[i] > max) {
            maxIndex = i;
            max = votes[i];
        }
    }

    return maxIndex;
}
