import { useContext } from "react";
import { AuthContext } from "../../context/auth/auth.context";
import { Navigate } from "react-router-dom";


export const HomePage = () => {
    const { auth } = useContext(AuthContext);
    
    const render = () => {
        return (
            <>
                <p>oi home</p>
            </>
        )
    }
        return auth.isLogged ? render() : <Navigate to='/login'/>
    }