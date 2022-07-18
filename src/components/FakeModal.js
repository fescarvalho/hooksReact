import { useEffect } from 'react'

const FakeModal = ({ forwardedRef }) => {
  useEffect(() => {
    forwardedRef.current?.focus()
  }, [forwardedRef])

  return (
    <div>
      <label htmlFor="e-mail">E-MAIL: </label>
      <input type="text" id="email" ref={forwardedRef} />
    </div>
  )
}

export default FakeModal
