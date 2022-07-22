import { useImperativeHandle, forwardRef, useRef } from 'react'

const SomeComponent = forwardRef((props, ref) => {
  const localInputRed = useRef()

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRed.current.value.length > 3) {
          localInputRed.current.value = ''
        }
      },
    }
  })
  return (
    <div>
      <p>Insira no maximo 3 caracteres</p>
      <input type="text" ref={localInputRed} />
    </div>
  )
})

export default SomeComponent
