import { useState, useEffect } from "react";
import Input from "../Input/index.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CriarFilme = () => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estreia, setEstreia] = useState("");
    const [genero, setGenero] = useState("");
    const [imagemCapa, setImagemCapa] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const verificarAutenticacao = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login");
                    return;
                }

                await axios.get("http://localhost:8080/api/filme", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
                navigate("/login");
            }
        };

        verificarAutenticacao();
    }, [navigate]);

    const criarFilme = async (e) => {
        e.preventDefault();
        const filme = new F

        try {

            await axios.post("http://localhost:8080/api/filmes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar filme:", error);
        }
    };

    if (!isAuthenticated) {
        return null;
    }

    return (
        <>
            <p className='text-2xl w-screen text-center mt-5'>Cadastro de Filme</p>
            <form onSubmit={criarFilme}
                  className='w-2/4 gap-3 flex-wrap rounded-md py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>
                <label htmlFor="titulo" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Título do filme</label>
                <Input
                    value={titulo}
                    type='text'
                    placeholder='Marvel Avenger`s'
                    name='titulo'
                    id='titulo'
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label htmlFor="descricao" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Descrição do filme</label>
                <textarea
                    value={descricao}
                    placeholder='Descreva o filme...'
                    name='descricao'
                    id='descricao'
                    onChange={(e) => setDescricao(e.target.value)}
                    cols="30"
                    rows="10">
                </textarea>

                <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='estreia'>Data de estreia:</label>
                <Input
                    value={estreia}
                    type='date'
                    placeholder='Estreia'
                    name='estreia'
                    id='estreia'
                    onChange={(e) => setEstreia(e.target.value)}
                />
                <label htmlFor="genero" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Gênero do filme</label>
                <Input
                    value={genero}
                    type='text'
                    placeholder='Gênero'
                    name='genero'
                    id='genero'
                    onChange={(e) => setGenero(e.target.value)}
                />
                <label className='relative text-slate-500 w-full left-28 text-xs' htmlFor='imagem_capa'>Imagem de capa:</label>
                <Input
                    type='file'
                    name='imagem_capa'
                    id='imagem_capa'
                    onChange={(e) => setImagemCapa(e.target.files[0])}
                />
                <button type='submit' className='primary-btn'>Cadastrar</button>
            </form>
        </>
    );
};