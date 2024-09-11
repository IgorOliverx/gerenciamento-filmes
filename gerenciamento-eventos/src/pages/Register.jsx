import Input from "../Input/index.jsx";

export const Register = () => {
    return (
        <>
            <p className='text-2xl w-screen text-center mt-5'>Cadastro de Usuário</p>
            <form action="" className='w-1/4 h-1/3 bg-white flex relative'>
                <Input type='text' placeholder='Nome' name='nome' id='nome'/>
            </form>
        </>
    )
}