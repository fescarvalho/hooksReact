import { useEffect, useState } from 'react'

const HooksUseEffect = () => {
  // 1-UseEffect
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('Ola estou sendo excutado')
  })
  const nextNumber = () => {
    setNumber(number + 1)
  }

  //2-useEffect array vazio
  useEffect(() => {
    console.log('Serei excutado apenas uma vez')
  }, [])

  //3-useEffect array de dependencias
  const [anotherNumber, setAnotherNumber] = useState(0)
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('O numero foi alterado')
    }
  }, [anotherNumber])

  const addAnotherNumber = () => {
    setAnotherNumber(anotherNumber + 1)
  }

  //4-useEffect CleanUp
  /*   useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Foi')
      setAnotherNumber(anotherNumber + 1)
    }, 2000)
    return () => clearTimeout(timer)
  }, [anotherNumber]) */

  return (
    // 1-UseEffect
    <div>
      <h2>UseEffect</h2>
      <p>O numero é: {number}</p>
      <button onClick={nextNumber}>Clique</button>
      <br />
      <h4>UseEffect com dependencias</h4>
      <p>O numero e: {anotherNumber}</p>
      <button onClick={addAnotherNumber}>Clique</button>
      <hr />
    </div>
  )
}

export default HooksUseEffect
