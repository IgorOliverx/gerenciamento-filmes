import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Capa from "../assets/avengers.jpg";
import { format } from "date-fns";
import axios from "axios";
import Input from "../Input/index.jsx";

export const Resenha = () => {
    // Estados para armazenar os dados do filme e do comentário
    const [filme, setFilme] = useState({});
    const [comentarios, setComentarios] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [nota, setNota] = useState(0);
    const IdDoFilme = useParams();
    const navigate = useNavigate();

    // useEffect para buscar os dados do filme ao carregar a página
    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/filmes/${IdDoFilme.idDoFilme}`);
                setFilme(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchFilme();
    }, [IdDoFilme]);

    // Função para buscar os comentários da API
    const fetchComentarios = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/comentarios?filme_id=${IdDoFilme.idDoFilme}`);
            setComentarios(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    // useEffect para buscar os comentários ao carregar a página
    useEffect(() => {
        fetchComentarios();
    }, [IdDoFilme]);

    // Função para lidar com a submissão do formulário de comentário
    const handleSubmit = async (e) => {
        e.preventDefault();
        const comentario = {
            titulo,
            conteudo,
            nota,
            filme_id: filme._id
        };

        try {
            const response = await axios.post('http://localhost:8080/api/comentarios', comentario);
            console.log("Comentário criado com sucesso:", response.data);
            fetchComentarios(); // Atualiza a lista de comentários após a criação
            navigate(`/ver-filme/${filme._id}`);
        } catch (error) {
            console.error("Erro ao criar comentário:", error);
        }
    };

    return (
        <>
            {/* Exibição dos detalhes do filme */}
            <div key={filme._id} className='w-full px-24 justify-center mx-auto flex border-t-2 border-b-2 border-slate-800 mt-10 pt-6'>
                <div className='flex w-full justify-center'>
                    <img src={Capa} alt="teste" className='w-1/3 h-4/5'/>
                    <div className='w-2/3 pl-10 block'>
                        <h1 className='text-5xl w-full h-12'>{filme.titulo}</h1>
                        <p className='text-sm relative ml-5 mt-7 text-slate-200'>{filme.descricao}</p>
                    </div>
                </div>
            </div>

            {/* Formulário para criar um comentário */}
            <div className='w-full flex justify-center mt-8 text-5xl'>Resenha</div>
            <br/>
            <form onSubmit={handleSubmit} className='w-2/4 gap-3 flex-wrap rounded-md mb-10 py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>
                <h2>Comentar</h2>
                <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='titulo'>Título:</label>
                <Input
                    value={titulo}
                    type='text'
                    placeholder='Título do comentário'
                    name='titulo'
                    id='titulo'
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='conteudo'>Conteúdo:</label>
                <Input
                    value={conteudo}
                    type='text'
                    placeholder='Conteúdo'
                    name='conteudo'
                    id='conteudo'
                    onChange={(e) => setConteudo(e.target.value)}
                />
                <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='nota'>Nota:</label>
                <Input
                    value={nota}
                    type='number'
                    placeholder='Nota do filme - 0 a 10'
                    name='nota'
                    id='nota'
                    onChange={(e) => setNota(e.target.value)}
                />
                <input type="hidden" value={filme._id} name='filme_id'/>
                <button type='submit' className='primary-btn'>Comentar</button>
            </form>

            {/* Exibição dos comentários */}
            <div className='w-full flex justify-start px-44 flex-wrap'>
                {comentarios.length > 0 ? (
                    comentarios.map((comentario) => (
                        <div key={comentario._id} className='w-full mx-auto bg-slate-800 flex border-2 rounded-md mb-10 border-slate-600 mt-10 pt-6'>
                            <div className='flex w-full justify-start pl-10' >
                                <div className='w-2/3 block'>
                                    <h2 className='text-3xl w-full h-12'>{comentario.titulo}</h2>
                                    <p className='text-sm relative ml-5 mt-7 text-slate-200 bottom-2'>{comentario.conteudo}</p>
                                    <span className='w-full relative left-full text-slate-300 mt-2 text-sm'>Nota: {comentario.nota}</span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum comentário cadastrado</p>
                )}
            </div>
        </>
    );
};