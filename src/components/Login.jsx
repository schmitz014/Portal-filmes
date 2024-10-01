export default function Login( {isLogged, handleLogin} ) {
    return (
        <>
            <div className='flex items-center gap-5'>    
                <h2>{isLogged && 'Olá, usuário'}</h2>
                <button 
                onClick={handleLogin}
                className="bg-purple-950 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                    {isLogged ? "Logout" : "Login"}
                </button>
            </div>
        </>
    )
}