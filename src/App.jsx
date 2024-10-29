import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import learners from './utilities/data.mjs'
import Learner from './components/Learner'

function App() {
  const [learnerData, setLearnerData] = useState({learners});

  return (
    <>
<div>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
</div>
    </>
  )
}

export default App
