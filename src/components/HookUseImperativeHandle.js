import { useRef } from 'react'
import SomeComponent from '../components/SomeComponent'

const HookUseImperativeHandle = () => {
  const componentRef = useRef()

  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>
        Valide aqui
      </button>
    </div>
  )
}

export default HookUseImperativeHandle
