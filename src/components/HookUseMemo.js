import { useState, useMemo, useEffect } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState(0)

  const premiumNumbers = useMemo(() => {
    return ['1', '100', '200']
  }, [])

  useEffect(() => {
    console.log('Constante Mapeada')
  }, [premiumNumbers])

  return (
    <div>
      <h2>HookUseMemo</h2>
      <br />
      <input
        type="text"
        name="number"
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />
      {premiumNumbers.includes(number) ? <p>O numero é primo</p> : ''}
    </div>
  )
}

export default HookUseMemo
