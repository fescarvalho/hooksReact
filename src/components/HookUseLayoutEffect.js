import { useState, useLayoutEffect, useEffect } from 'react'

const HookUseLayoutEffect = () => {
  const [nome, setNome] = useState('')

  useEffect(() => {
    console.log('Mudou nome(Effect)')
    setNome('Pedro')
  }, [])

  useLayoutEffect(() => {
    console.log('Mudou nome(Layout)')
    setNome('Fernando')
  }, [])

  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <p>o Nome é : {nome}</p>
    </div>
  )
}

export default HookUseLayoutEffect
