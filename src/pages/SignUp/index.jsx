import { Container, Form, Logo } from "./styles";
import logo from "../../assets/logo-bombeiros.png"
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

export const SignUp = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo dos Bombeiros" />
            </Logo>
            <Form>
                <h2>Crie sua conta</h2>
                <InputComponent
                    id="name"
                    type="text"
                    placeholder="Ex: Johnny"
                    title="Seu nome"
                />
                 <InputComponent
                    id="cpf"
                    type="text"
                    placeholder="Ex: 333.444.555-52"
                    title="CPF"
                />
                 <InputComponent
                    id="email"
                    type="text"
                    placeholder="Ex: bombeiros@gmail.com"
                    title="Email"
                />
                <InputComponent
                    id="password"
                    type="password"
                    placeholder="********"
                    title="Senha"
                />

                <ButtonComponent title="Entrar" />
                <a>Já tenho uma conta</a>
            </Form>
        </Container>
    );
};