import Input from "../Input/index.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState([]);
    const [senha, setSenha] = useState([]);

    const navigate = useNavigate();

    const logarUsuario = (e) => {
        e.preventDefault();
        const usuario = {
            email: email,
            senha: senha
        }
        axios.post('http://localhost:8080/api/usuario/login', usuario)
            .then(() => {
                navigate('/home')
            }).catch(error => console.error(error))
    }
    return (
        <>
            <p className='text-4xl w-screen text-center mt-5 mb-5'>Login</p>
            <form onSubmit={logarUsuario}
                  className='w-2/4 gap-3 flex-wrap rounded-md py-10 bg-slate-900 border-2 border-slate-800 flex relative mx-auto justify-center'>
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
                <button type='submit' className='primary-btn'>Login</button>
            </form>
        </>
    )
}