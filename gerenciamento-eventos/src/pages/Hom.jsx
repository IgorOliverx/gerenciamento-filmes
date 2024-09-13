import React, {useState, useEffect} from "react";
import axios from "axios";
import {format} from "date-fns";
import Logo from '../assets/react.svg';
import Capa from '../assets/avengers.jpg';
import {Link} from "react-router-dom";

export const Hom = () => {

    const [filmes, setFilmes] = useState([]);

    const[isAuth, setIsAuth] = useState(true);



    useEffect(() => {
        axios.get('http://localhost:8080/api/filmes')
            .then((response) => {
                setFilmes(response.data);
                const token = localStorage.getItem('token');

                if(!token) {
                    setIsAuth(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
                {filmes.map((filme) => (
                <div className='w-full px-24 justify-center mx-auto flex border-t-2 border-b-2 border-slate-800 mt-10 pt-6'>
                    <div key={filme.id} className='flex w-full justify-center'>
                        <img src={Capa} alt="teste" className='w-1/3 h-4/5'/>
                        <div className='w-2/3 pl-10 block'>
                            <h1 className='text-5xl w-full h-12'>{filme.titulo}</h1>
                            <span className='block w-full relative text-slate-300 mt-2 text-sm'>{format(new Date(filme.estreia), 'dd/MM/yyyy')} | {filme.duracao.replace(':', 'h')}  | {filme.genero}</span>
                            <p className='underline font-bold text-white text-xs relative'>usuario@example.com</p>
                            <p className='text-sm relative ml-5 mt-7 text-slate-200'>{filme.descricao}</p>
                            <span className='w-full flex items-center justify-between mt-4 text-xs font-bold'>
                                <p>Nota: 9/10</p>
                                <p>Comentários: 10</p>
                                   <Link className='primary-btn w-60 font-normal text-lg bg-blue-800 rounded-none' to={`/ver-filme/${filme._id}`}>
                                  {isAuth ? 'Editar' : 'Comentar'}
                                   </Link>

                            </span>

                        </div>
                    </div>
            </div>
                ))}
        </>

    )
}