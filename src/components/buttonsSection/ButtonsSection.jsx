import { useState } from 'react'
import Button from '../button/Button'
import { difference } from '../Text.js'

export default function ButtonsSection() {
  const [content, setContent] = useState(null)

  function onHandleClick(type) {
    setContent(type)
  }

  return (
    <section className="buttons__section">
      <Button isActive={content === 'easy'} onClick={() => onHandleClick('easy')}>
        Click 1
      </Button>
      <Button isActive={content === 'program'} onClick={() => onHandleClick('program')}>
        Click 2
      </Button>
      <Button isActive={content === 'god'} onClick={() => onHandleClick('god')}>
        Click 3
      </Button>
      {!content && <p>Click on button</p>}
      {content && <p>{difference[content]}</p>}
    </section>
  )
}
