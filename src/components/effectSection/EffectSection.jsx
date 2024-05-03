import Button from '../button/Button'
import Modal from '../modal/Modal'
import { useState, useEffect } from 'react'
import useInput from '../../hooks/useInput'

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setUsers(users)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={() => setModal(true)}>open information</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum aut laudantium
          commodi id provident vitae rem, odit quam quas et ex quae accusamus facilis unde
          natus tenet ur doloribus. Ex, fuga.
        </p>
        <Button onClick={() => setModal(false)}>close modal</Button>
      </Modal>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <hr />
          <input type="text" {...input} />
          <ul>
            {users
              .filter(user => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
