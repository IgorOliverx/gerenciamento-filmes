import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./Header/index.jsx";
import {Footer} from "./Footer/index.jsx";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register /> } />
        </Routes>
        <Footer />
    </>
  )
}

export default App
