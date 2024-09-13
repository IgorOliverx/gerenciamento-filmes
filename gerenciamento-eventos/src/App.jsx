import {Header} from "./Header/index.jsx";
import {Footer} from "./Footer/index.jsx";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";
import {CriarFilme} from "./pages/CriarFilme.jsx";

import React, {useState, useEffect} from "react";
import axios from "axios";
import {Hom} from "./pages/Hom.jsx";
import {VisualizarFilme} from "./pages/VisualizarFilme.jsx";
import {Resenha} from "./pages/Resenha.jsx";

function App() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/filmes')
            .then((response) => {
                setFilmes(response.data);
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
            <Route path='/home' element={<Hom />} />
            <Route path='/ver-filme/:idDoFilme' element={<VisualizarFilme />} />
            <Route path='/resenha/:idDoFilme' element={<Resenha /> } />
            <Route path='*' element={<Hom />} />
        </Routes>
        {filmes.length >= 1 ? <Footer /> : null}
    </>
  )
}

export default App
