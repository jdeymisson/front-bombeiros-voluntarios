import { Container, Form, Logo } from "./styles";
import logo from "../../assets/logo-bombeiros.png"
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

export const SignIn = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo dos Bombeiros" />
            </Logo>
            <Form>
                <h2>Faça login </h2>
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
            </Form>
        </Container>
    );
};