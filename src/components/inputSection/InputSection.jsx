import { useState } from 'react'
import Button from '../button/Button'
import classes from './InputSection.module.css'

export default function InputSection() {
  const [form, setform] = useState({
    name: '',
    hasError: false,
    reason: 'error'
  })

  function handleNameChange(event) {
    setform(prev => ({ ...prev, name: event.target.value, hasError: event.target.value.trim().length === 0 }))
  }

  return (
    <section>
      <h3> input field</h3>
      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className={classes.inputField}
          value={form.name}
          onChange={handleNameChange}
          style={{ border: form.hasError ? '1px solid red' : null }}
        />

        <label htmlFor="reason"></label>
        <select id="reason" onChange={event => setReason(event.target.value)}>
          <option value="error">error</option>
          <option value="help">help</option>
          <option value="suggest">suggest</option>
        </select>

        <pre>{form.reason}</pre>
      </form>
      <Button disabled={form.name.trim().length === 0}>Отправить</Button>
      <Button onClick={() => setform(prev => ({ ...prev, hasError: !prev.hasError }))}>torgle Error</Button>
    </section>
  )
}
