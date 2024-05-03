import Button from '../button/Button'

export default function TabSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        main
      </Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>
        feedback
      </Button>
      <Button isActive={active === 'thirdSection'} onClick={()=>onChange('thirdSection')}>third section</Button>
      <Button isActive={active==='effectSection'} onClick={()=>onChange('effectSection')}>effect section</Button>
    </section>
  )
}
