import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({votes, setVotes, text}) => {
  const addVote = () => setVotes(votes + 1)
  return (
    <button onClick={addVote}>
      {text}
    </button>
  )
}

const Statistic = ({text, value}) => (
  <table>
    <tbody>
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
    </tbody>
  </table>
)

const Statistics = ({good, neutral, bad}) => {
  const allVotes = good + bad + neutral

  return(
    <div>
      <h1>Statistics</h1>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="average" value ={(good - bad) / allVotes || 0} />
      <Statistic text="positive feedback" value ={`${good / allVotes * 100 || 0}%`} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1> Give feedback </h1>
      <Button text="good" votes={good} setVotes={setGood} />
      <Button text="neutral" votes={neutral} setVotes={setNeutral}/>
      <Button text="bad" votes={bad} setVotes={setBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
