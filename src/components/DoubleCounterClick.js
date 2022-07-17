import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const DoubleCounterClick = () => {
  const { doubleCounter } = useContext(CounterContext)
  return (
    <div>
      <h3>DoubleCounter</h3>
      <p>{doubleCounter}</p>
    </div>
  )
}

export default DoubleCounterClick
