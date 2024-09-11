import Input from "../Input/index.jsx";

export const Register = () => {
    return (
        <>
            <p className='text-2xl w-screen text-center mt-5'>Cadastro de Usuário</p>
            <form action="" method='POST' className='w-2/4 gap-3 flex-wrap h-1/3 rounded-md py-5 bg-white flex relative mx-auto justify-center'>
                <Input type='text' placeholder='Nome' name='nome' id='nome'/>
                <Input type='email' placeholder='E-mail' name='email' id='email'/>
                <Input type='password' placeholder='Senha' name='senha' id='senha'/>
                <button type='submit' className='primary-btn'>Cadastrar</button>
            </form>
        </>
    )
}