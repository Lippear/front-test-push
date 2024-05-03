import { aboutInfo } from '../Text'

export default function WayToTeach() {
  return (
    <ul>
      {aboutInfo.map(item => (
        <li key={item.title}>
          <p>
            <strong>{item.title}: </strong> {item.description}{' '}
          </p>
        </li>
      ))}
    </ul>
  )
}
