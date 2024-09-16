import { useState, useEffect } from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";
import Input from "../Input/index.jsx";

export const VisualizarFilme = () => {
    const [filme, setFilme] = useState({});
    const [isAuth, setIsAuth] = useState(true);
    const { idDoFilme } = useParams();
    const navigate = useNavigate();
    console.log(filme)

    const deletarFilme = async (e)  => {
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:8080/api/filmes/${idDoFilme}`, filme)
            navigate('/home')
        }catch (err){
            console.error("Erro ao deletar filme" + err);
        }
    }

    useEffect(() => {
        const verificarAuth = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate(`/resenha/${idDoFilme}`);
                    return;
                }
                const response = await axios.get(`http://localhost:8080/api/filmes/${idDoFilme}`);
                setFilme(response.data);
                setIsAuth(true);
            } catch (err) {
                setIsAuth(false);
                console.error(err);
                navigate(`/resenha/${idDoFilme}`);
            }
        };
        verificarAuth();
    }, [idDoFilme, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilme((prevFilme) => ({
            ...prevFilme,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/filmes/${idDoFilme}`, filme, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setFilme(response.data);
            navigate("/home");
        } catch (error) {
            console.error("Erro ao atualizar filme:", error);
        }
    };

    return (
        <>
            <p className='text-2xl w-screen text-center mt-5'>VISUALIZAR FILME</p>
            <form onSubmit={handleSubmit}
                  className='w-2/4 gap-3 flex-wrap rounded-md py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>
                <label htmlFor="titulo" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Título do filme</label>
                <Input
                    value={filme.titulo || ''}
                    type='text'
                    placeholder='Marvel Avenger`s'
                    name='titulo'
                    id='titulo'
                    onChange={handleChange}
                />
                <label htmlFor="descricao" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Descrição do filme</label>
                <textarea
                    value={filme.descricao || ''}
                    placeholder='Descreva o filme...'
                    name='descricao'
                    id='descricao'
                    onChange={handleChange}
                    cols="30"
                    rows="10">
                </textarea>

                <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='estreia'>Data de estreia:</label>
                <Input
                    value={filme.estreia || ''}
                    type='date'
                    placeholder='Estreia'
                    name='estreia'
                    id='estreia'
                    onChange={handleChange}
                />
                <label htmlFor="genero" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Gênero do filme</label>
                <Input
                    value={filme.genero || ''}
                    type='text'
                    placeholder='Gênero'
                    name='genero'
                    id='genero'
                    onChange={handleChange}
                />
                <label htmlFor="duracao" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Duração do filme</label>
                <Input
                    value={filme.duracao || ''}
                    type='time'
                    placeholder='Duração'
                    name='duracao'
                    id='duracao'
                    onChange={handleChange}
                />
                <button type='submit' className='primary-btn'>Atualizar</button>
            </form>
                <center><button onClick={deletarFilme} className='primary-btn bg-red-900 hover:bg-red-800 w-96 mt-20 relative bottom-16 mb-36'>Deletar Filme</button></center>
        </>
    );
};