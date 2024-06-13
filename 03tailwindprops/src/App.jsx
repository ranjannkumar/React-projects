import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let  myinfo={
    username:"ranjan",
    age: 22,
    rollno: 21012204
  }

  return (
    <>
    <h1 className='bg-green-400 text-black
    p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Ranjan" btnText="click me"/>
    <Card username="Mansi-Ranjan" btnText="visit me"/>


    </>
  )
}

export default App
