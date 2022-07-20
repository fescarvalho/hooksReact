import { useState, useCallback } from 'react'
import ListUseCallback from './ListUseCallback'

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0)

  const getElementByData = useCallback(() => {
    return ['a', 'b', 'c']
  }, [])

  return (
    <div>
      <h2>useCallback</h2>
      <ListUseCallback getElement={getElementByData} />
      <br />

      <button onClick={() => setCounter(counter + 1)}>
        Clique para buscar os dados
      </button>

      <p>{counter}</p>
    </div>
  )
}

export default HookUseCallback
