import { useState } from "react";
import { Container, Form, Logo } from "./styles";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-bombeiros.png"
import { api } from "../../services/api";
import { isValidCPF, isValidEmail } from "../../utils/fieldValidation";

export const SignUp = () => {
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const registerUsers = async (event) => {
        event.preventDefault();
        const cpfIsValid = isValidCPF(cpf);
        const emailIsValid = isValidEmail(email);

        if(!cpfIsValid){
            return alert("Para se cadastrar é necessário preencher um CPF válido!");
        };

        if(!emailIsValid){
            return alert("Para se cadastrar é necessário informar um e-mail válido!");
        };

        if(password.length < 6){
            return alert("Para se cadastrar é necessário informar uma senha com no minímo 6 caracter!");
        };

        setLoading(prevState => !prevState);

        const dados = {
            cpf,
            name,
            email,
            password
        };

        try{
            const response = await api.post("/users", dados);
            if(response.status === 201) {
                alert(response.data.message);
                navigate("/");
            };
        } catch(error) {
            if(error.response.data) {
                alert(error.response.data.message);
                setLoading(false);
            };
        };
    };

    return (
        <Container>
            <Logo>
                <div>
                    <img src={logo} alt="Logo dos Bombeiros" />
                </div>
            </Logo>
            <Form>
                <form>
                    <h2>Crie sua conta</h2>
                    <InputComponent
                        id="cpf"
                        type="text"
                        placeholder="Ex: 111.222.333-75"
                        title="CPF"
                        onChange={({target}) => setCpf(target.value)}
                    />
                    <InputComponent
                        id="name"
                        type="text"
                        placeholder="Ex: Johnny Deymisson"
                        title="Nome"
                        onChange={({target}) => setName(target.value)}
                    />
                    <InputComponent
                        id="email"
                        type="text"
                        placeholder="Ex: bombeiros@gmail.com"
                        title="Email"
                        onChange={({target}) => setEmail(target.value)}
                    />
                    <InputComponent
                        id="password"
                        type="password"
                        placeholder="********"
                        title="Senha"
                        onChange={({target}) => setPassword(target.value)}
                    />

                    <ButtonComponent 
                        title="Cadastrar"
                        color="YELLOW"
                        onClick={registerUsers}
                        loading={loading}
                    />
                    <Link to="/">Possuo uma conta</Link>
                </form>
            </Form>
        </Container>
    );
};