import React from 'react'
import { useState } from 'react'

// 1-useState
const HookUseState = () => {
  const [nome, setNome] = useState('Marcio')

  const changeNames = () => {
    setNome('Mauricio')
  }

  const [age, setAge] = useState(18)

  // 2 useState e Inputs
  const sendAge = (e) => {
    e.preventDefault()

    console.log(age)
  }
  return (
    <div>
      {/* 1 useState */}
      <p>O nome e: {nome}</p>
      <button onClick={changeNames}>Mude o nome</button>
      {/* 2 useState e inputs */}
      <form onSubmit={sendAge}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
        <p>
          A idade de {nome} é : {age}
        </p>
      </form>
      <hr />
    </div>
  )
}

export default HookUseState
