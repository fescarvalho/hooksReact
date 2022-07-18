import { useState, useRef, useEffect } from 'react'

const HookUseRef = () => {
  /*1- UseRef */
  const numberRef = useRef(0)
  const [number, setNumber] = useState(0)
  const [numberB, setNumberB] = useState(0)

  useEffect(() => {
    numberRef.current = numberRef.current + 1
  })

  /* 2- UseRef e inputs */
  const inputRef = useRef()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')
    inputRef.current.focus()
  }

  return (
    <div>
      {/* 1-UseRef */}
      <h2>UseRef</h2>
      <p>O componente renderizou {numberRef.current} vezes</p>
      <p>Couter 1: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <p>Couter 2: {numberB}</p>
      <button onClick={() => setNumberB(numberB + 1)}>Add</button>
      <br />
      <br />
      {/* 2- UseRef e inputs */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default HookUseRef
