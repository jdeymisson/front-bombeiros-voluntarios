import { Container, Logo, Logout, Nav } from "./styles";

export const Menu = () => {
    return(
        <Container>
            <Logo>
                <p>tewasdas</p>
            </Logo>
            <Nav>
                <ul>
                    <li>Home</li>
                    <li>Usuário</li>
                </ul>
            </Nav>
            <Logout>
                Sair
            </Logout>
        </Container>
    );
};