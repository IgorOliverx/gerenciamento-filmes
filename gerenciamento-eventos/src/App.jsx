import {Header} from "./Header/index.jsx";
import {Footer} from "./Footer/index.jsx";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";
import {CriarFilme} from "./pages/CriarFilme.jsx";

import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/filmes')
            .then((response) => {
                setFilmes(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

  return (
    <>
        <Header />
        <Routes>
            <Route path='/login' element={<Login /> } />
            <Route path='/cadastro' element={<Register /> } />
            <Route path='/filme' element={<CriarFilme /> } />
        </Routes>
        {filmes.map((filme) => (
            <div key={filme.id}>
                <h1>{filme.titulo}</h1>
                <p>{filme.genero}</p>
                <p>{filme.descricao}</p>
            </div>
        ))}
        <Footer />
    </>
  )
}

export default App
