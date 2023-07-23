import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [ data, setData ] = useState({});

    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
    
            localStorage.setItem("@bombeirosvoluntarios:user", JSON.stringify(user));
            localStorage.setItem("@bombeirosvoluntarios:token", token);

            api.defaults.headers.authorization = "Bearer " + token;

            setData({ user, token })
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                console.log(error);
            };
        };
    };

    const signOut = () => {
        localStorage.removeItem("@bombeirosvoluntarios:user");
        localStorage.removeItem("@bombeirosvoluntarios:token");
        setData({});
    };
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@bombeirosvoluntarios:user"));
        const token = localStorage.getItem("@bombeirosvoluntarios:token");

        if(user && token) {
            api.defaults.headers.authorization = `Bearer ${ token }`;

            setData({
                user, 
                token
            });
        };
    }, []);

    return(
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };