import { useParams, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import '../index.css';
import Logo from '../../public/logo2.svg';
import {VisualizarFilme} from "../pages/VisualizarFilme.jsx";
import {Login} from "../pages/Login.jsx";
import {Register} from "../pages/Register.jsx";
export const Header = (props) => {
    return (
        <header className='w-screen h-24 bg-red-900 flex justify-between px-12'>
            <img src={Logo} alt="" className='w-36 h-24'/>
            <div className='flex flex-row gap-10'>
                <Routes>
                    <Route path='/' element={<a href='/'>Home</a>} />
                    <Route path='/login' element={Login}/>
                </Routes>
            </div>
        </header>
    );
};