import { useState, useRef } from 'react'

export default function ThirdSection() {
  const input = useRef()
  const [value, setValue] = useState('')

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setValue(event.target.value)
    }
  }

  return (
    <>
      <h3>Input value: {value}</h3>
      <input ref={input} type="text" onKeyDown={handleKeyDown} />
    </>
  )
}
