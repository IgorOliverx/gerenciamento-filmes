import {useState, useEffect} from "react";
import Input from "../Input/index.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export const CriarFilme = () => {
    const [titulo, setTitulo] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [estreia, setEstreia] = useState([]);
    const [genero, setGenero] = useState([]);
    const [imagem_capa, setImagem_capa] = useState([]);

    const navigate = useNavigate();

    const criarFilme = (e) => {
        e.preventDefault();
        const filme = {
            titulo: titulo,
            descricao: descricao,
            estreia: estreia,
            genero: genero,
            imagem_capa: imagem_capa,
        }
        axios.post('http://localhost:8080/api/filmes', filme)
            .then(() => {
                navigate('/')
            }).catch(error => console.error(error))

    }
    return (
        <>
            <>
                <p className='text-2xl w-screen text-center mt-5'>Cadastro de Filme</p>
                <form onSubmit={criarFilme}
                      className='w-2/4 gap-3 flex-wrap rounded-md py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>
                    <label htmlFor="titulo" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Título do
                        filme</label>
                    <Input
                        value={titulo}
                        type='text'
                        placeholder='Marvel Avenger`s'
                        name='titulo'
                        id='titulo'
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <label htmlFor="descricao" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Descrição
                        do
                        filme</label>
                    <textarea
                        value={descricao}
                        placeholder='Descreva o filme...'
                        name='descricao'
                        id='descricao'
                        onChange={(e) => setDescricao(e.target.value)}
                        cols="30"
                        rows="10">
                    </textarea>

                    <label className='relative text-slate-500 w-full left-28 top-2 text-xs' htmlFor='estreia'>Data de
                        estreia:</label>

                    <Input
                        value={estreia}
                        type='date'
                        placeholder='Estreia'
                        name='estreia'
                        id='estreia'
                        onChange={(e) => setEstreia(e.target.value)}
                    />
                    <label htmlFor="descricao" className='relative text-slate-300 w-full left-28 top-2 text-xs'>Gênero
                        do
                        filme</label>
                    <Input
                        value={genero}
                        type='text'
                        placeholder='Gênero'
                        name='genero'
                        id='genero'
                        onChange={(e) => setGenero(e.target.value)}
                    />
                    <label className='relative text-slate-500 w-full left-28 text-xs' htmlFor='imagem_capa'>Imagem de
                        capa:</label>
                    <Input
                        className='-ml-3'
                        value={imagem_capa}
                        type='file'
                        placeholder=''
                        name='imagem_capa'
                        id='imagem_capa'
                        onChange={(e) => setImagem_capa(e.target.value)}
                    />
                    <button type='submit' className='primary-btn'>Cadastrar</button>
                </form>
            </>
        </>
    )
}