import HooksUseEffect from '../components/HooksUseEffect'
import HookUseReducer from '../components/HookUseReducer'
/* import HookUseReducerMeu from '../components/HookUseReducerMeu' */
import HookUseState from '../components/HookUseState'

//context
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import CounterClick from '../components/CounterClick'
import DoubleCounterClick from '../components/DoubleCounterClick'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

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
      <hr />
      <h2>UseContext 2</h2>
      <CounterClick />
      <DoubleCounterClick />
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
      <hr />
      <HookUseMemo />
      <hr />
      <HookUseLayoutEffect />
      <hr />
      <HookUseImperativeHandle />
      <hr />
      <HookCustom />
    </>
  )
}
export default Home
