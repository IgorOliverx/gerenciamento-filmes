import React, {useState, useEffect} from "react";
import axios from "axios";
import Logo from '../assets/react.svg';
import Capa from '../assets/avengers.jpg';
export const Hom = () => {
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
            <div className='w-full px-28 justify-center mx-auto flex border-t-2 border-b-2 border-slate-800 mt-10 pt-6'>
                {filmes.map((filme) => (
                    <div key={filme.id} className='flex w-full justify-center'>
                        <img src={Capa} alt="teste" className='w-1/3 h-4/5'/>
                        <div className='w-1/2 pl-6'>
                            <h1 className='text-4xl'>{filme.titulo}</h1>
                            <p>{filme.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}