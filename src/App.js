import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import  Thanks from './pages/Thanks'
import './App.css'


function App() {

  const [email, setEmail] = useState("");
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home email={email} setEmail={setEmail} />} />
        <Route path='/Thanks' element={<Thanks email={email} />} />
      </Routes>
    </>
  )
}

export default App
