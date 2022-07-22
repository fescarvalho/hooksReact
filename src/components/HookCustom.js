import { useState } from 'react'
import { usePrevious } from './UsePrevious'

const HookCustom = () => {
  const [number, setNumber] = useState(0)
  const numberPrevious = usePrevious(number)

  return (
    <div>
      <h2>Custom Hooks</h2>
      <p>{number}</p>
      <p>{numberPrevious}</p>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 100))
        }}
      >
        Clique Aqui
      </button>
    </div>
  )
}

export default HookCustom
