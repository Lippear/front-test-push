import Header from './components/header/Header.jsx'
import WayToTeach from './components/wayToTeach/WayToTeach'
import ButtonsSection from './components/buttonsSection/ButtonsSection.jsx'
import { useState } from 'react'
import TabSection from './components/tabSection/TabSection'
import InputSection from './components/inputSection/InputSection.jsx'
import ThirdSection from './components/thirdSection/ThirdSection.jsx'
import EffectSection from './components/effectSection/EffectSection.jsx'

export default function App() {
  const [tab, setTab] = useState('effectSection')
  return (
    <div>
      <Header />
      <InputSection />
      <TabSection active={tab} onChange={current => setTab(current)} />

      {tab === 'main' && <WayToTeach />}
      {tab === 'feedback' && <ButtonsSection />}
      {tab === 'thirdSection' && <ThirdSection />}
      {tab === 'effectSection' && <EffectSection />}
    </div>
  )
}
