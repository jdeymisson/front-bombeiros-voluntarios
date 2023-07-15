import { Container, Form, Logo } from "./styles";
import logo from "../../assets/logo-bombeiros.png"
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

export const SignUp = () => {
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
                    />
                    <InputComponent
                        id="name"
                        type="text"
                        placeholder="Ex: Johnny Deymisson"
                        title="Nome"
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

                    <ButtonComponent 
                        title="Entrar"
                        color="YELLOW"
                    />
                    <a>Crie sua conta</a>
                </form>
            </Form>
        </Container>
    );
};