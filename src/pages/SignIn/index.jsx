    import { useState } from "react";
    import { Container, Form, Logo } from "./styles";
    import { InputComponent } from "../../components/Input";
    import { ButtonComponent } from "../../components/Button";
    import { Link } from "react-router-dom";
    import logo from "../../assets/logo-bombeiros.png"
    import { isValidCPF, isValidEmail } from "../../utils/fieldValidation";
    import { useAuth } from "../../hooks/authProvider";

    export const SignIn = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const { signIn } = useAuth();

        const handleSignIn = () => {
            signIn({ email, password });
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
                        <h2>Faça login </h2>
                        <InputComponent
                            id="email"
                            type="text"
                            placeholder="Ex: bombeiros@gmail.com"
                            title="Email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <InputComponent
                            id="password"
                            type="password"
                            placeholder="********"
                            title="Senha"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <ButtonComponent 
                            title="Entrar"
                            color="YELLOW"
                            onClick={handleSignIn}
                        />
                        <Link to="/signup">Crie sua conta</Link>
                    </form>
                </Form>
            </Container>
        );
    };