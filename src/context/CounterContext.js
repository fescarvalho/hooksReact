import { createContext, useEffect, useState } from 'react'

export const CounterContext = createContext()

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [doubleCounter, setDoubleCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  useEffect(() => {
    setDoubleCounter(counter * 2)
  }, [counter])

  return (
    <CounterContext.Provider
      value={{ counter, incrementCounter, doubleCounter, setCounter }}
    >
      {children}
    </CounterContext.Provider>
  )
}
