import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const [timenow, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <header className="header">
      <h1>Hello world!</h1>
      <p>Time now: {timenow.toLocaleTimeString()}</p>
    </header>
  )
}
