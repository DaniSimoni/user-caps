import { useNavigate } from "react-router-dom"

export const FormLoginComponents = () => {
const navigate = useNavigate();

const redirectToLogin = () => {
    navigate('/home')
}

    return (
        <form onSubmit={redirectToLogin}>
            <legend>Login</legend>
        <div className="imput-group">
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu email"/>
        </div>
        <div className="imput-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha"/>
        </div>

        <button type="submit">Logar</button>
        </form>
    )
}