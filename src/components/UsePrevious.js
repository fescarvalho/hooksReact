import { useRef, useEffect, useDebugValue } from 'react'

export const usePrevious = (value) => {
  const ref = useRef()

  useDebugValue('---CUSTOM HOOK e USE_DEBUG_VALUE')
  useDebugValue('O numero anteror é: ' + value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}
