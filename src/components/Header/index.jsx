import { useEffect, useState } from "react";
import { Container, Profile } from "./styles";
import { ButtonComponent } from "../Button";
import { InputComponent } from "../Input";
import { FormComponent } from "../Form";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/authProvider";
import { api } from "../../services/api"

const opts = [
    {id: 1, descricao: "teste 01"},
    {id: 2, descricao: "teste 02"},
    {id: 3, descricao: "teste 03"},
    {id: 4, descricao: "teste 04"},
    {id: 5, descricao: "teste 05"},
]

export const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useAuth();
    
    const updateUser = async () => {
        try{
            const response = await api.put("/users", {cpf, name, email, password});

            const { user } = response.data;
            
            localStorage.setItem("@bombeirosvoluntarios:user", JSON.stringify(user));
            
            alert(response.data.message);
            
            setModalOpen(false);
        } catch(error){
            if(error.response) {
                alert(error.response.message);
            };
        };
    };

    useEffect(() => {
        setCpf(user.cpf);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    }, []);

    return(
        <Container>
            <Profile onClick={() => setModalOpen(!modalOpen)}>
                <FaUserCircle />
            </Profile>

            {modalOpen && 
            <FormComponent 
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
            >
                <h2>{name}</h2>
                <InputComponent
                    id="cpf"
                    type="text"
                    placeholder="Ex: 333.444.555-52"
                    title="CPF"
                    value={cpf}
                    onChange={({ target }) => setCpf(target.value)}
                />
                <InputComponent
                    id="name"
                    type="text"
                    placeholder="Ex: Johnny"
                    title="Seu nome"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <InputComponent
                    id="email"
                    type="text"
                    placeholder="Ex: bombeiros@gmail.com"
                    title="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <InputComponent
                    id="password"
                    type="password"
                    placeholder="********"
                    title="Senha"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <ButtonComponent 
                    title="Salvar" 
                    color="YELLOW"
                    onClick={updateUser}
                />
            </FormComponent>
            }
        </Container>
    );
};