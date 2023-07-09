import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container } from "./styles";
export const Home = () => {
    return(
        <Container>
            <Menu />
            <Header />
            <Footer />
        </Container>
    );
};
