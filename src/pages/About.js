import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const About = () => {
  const { contextValue } = useContext(SomeContext)
  return (
    <>
      <h1>Sobre</h1>
      <p>O valor do context e: {contextValue}</p>
    </>
  )
}

export default About
