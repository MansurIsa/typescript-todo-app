import React, { useState } from 'react'
import InpBtn from './components/InpBtn'
import Container from './components/Container'
import { Tests } from './types/Type'

const App: React.FC = () => {
  const storedItems = localStorage.getItem("items");
  const initialState: Tests[] = storedItems ? JSON.parse(storedItems) : [];

  const [arr, setArr] = useState<Tests[]>(initialState);

  const showEl = (x: Tests[]) => {
    setArr(x)
  }
  return (
    <div>
      <InpBtn arr={arr} setArr={setArr} showEl={showEl} />
      <Container arr={arr} showEl={showEl} />
    </div>
  )
}

export default App