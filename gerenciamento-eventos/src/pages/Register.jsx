import Input from "../Input/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Register = () => {
        const [nome, setNome] = useState([]);
        const [email, setEmail] = useState([]);
        const [senha, setSenha] = useState([]);

        const navigate = useNavigate();

        const criarUsuario = (e) => {
            e.preventDefault();
            const usuario = {
                nome: nome,
                email: email,
                senha: senha
            }
            axios.post('http://localhost:8080/api/usuario', usuario)
                .then(() => {
                    navigate('/')
                }).catch(error => console.error(error))

        }
    return (
        <>
            <p className='text-2xl w-screen text-center mt-5'>Cadastro de Usuário</p>
             <form onSubmit={criarUsuario} className='w-2/4 gap-3 flex-wrap rounded-md py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>

                <Input
                    value={nome}
                    type='text'
                    placeholder='Nome'
                    name='nome'
                    id='nome'
                    onChange={(e) => setNome(e.target.value)}
                />

                <Input
                    value={email}
                    type='email'
                    placeholder='E-mail'
                    name='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    value={senha}
                    type='password'
                    placeholder='Senha'
                    name='senha'
                    id='senha'
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type='submit' className='primary-btn'>Cadastrar</button>
            </form>
        </>
    )
}