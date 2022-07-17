import HooksUseEffect from '../components/HooksUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseReducerMeu from '../components/HookUseReducerMeu'
import HookUseState from '../components/HookUseState'

//context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Home = () => {
  const { contextValue } = useContext(SomeContext)

  return (
    <>
      <HookUseState />
      <HookUseReducer />
      <HooksUseEffect />
      {/* <HookUseReducerMeu /> */}
      {/* UseContext */}
      <h2>UseContext</h2>
      <p>O valor do context e: {contextValue}</p>
    </>
  )
}
export default Home
