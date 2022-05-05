import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
  const App = (props) => {
    const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
    const [selected, setSelected] = useState(0)
    const showAnecdote = () => setSelected([Math.floor(Math.random() * 7)])
    const [points, addPoints] = useState(new Array(8).join('0').split('').map(parseFloat))

    const maxVotes = () => {
      let maxNum = 0
      let maxPoint = 0
      for (let i = 0; i <= anecdotes.length; i++){
        if(points[i] >= maxNum){
          maxNum = points[i]
          maxPoint = i
        }
      }  
    return maxPoint
    }

    const addVotes = () => {const copy = [...points]
    copy[selected] += 1
    addPoints(copy)}  

    return (
    <div>
      
      <h2>Anecdote of the day</h2>
      <h4>{anecdotes[selected]}</h4>
      <p>has {points[selected]} votes</p>
      <Button handleClick={addVotes} text='vote'/>
      <Button handleClick={showAnecdote} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <h4>{anecdotes[maxVotes()]}</h4>
      <p>has {points[maxVotes()]} votes</p>
    </div>
  )
}



export default App
