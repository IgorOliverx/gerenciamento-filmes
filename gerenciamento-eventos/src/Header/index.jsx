import '../index.css';
import Logo from '../../public/logo2.svg';

export const Header = (props) => {
    return (
        <header className='w-screen h-24 bg-red-900 flex justify-between px-12'>
            <img src={Logo} alt="" className='w-36 h-24'/>
            <div className='flex flex-row gap-10 justify-center items-center font-bold pr-10'>
                <a href="/filme">Criar Resenha</a>
                <a href="">Minha Lista</a>
            </div>
        </header>
    );
};