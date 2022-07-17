import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const CounterClick = () => {
  const { counter, incrementCounter } = useContext(CounterContext)

  return (
    <div>
      <h3>setCounter</h3>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Clique Aqui</button>
    </div>
  )
}

export default CounterClick
