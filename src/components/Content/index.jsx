import { Link } from "react-router-dom";
import { Container, ButtonBack, ContentInner, Title } from "./styles";
import { FaChevronLeft } from "react-icons/fa";

export const Content = ({ children, title }) => {
    return(
        <Container>
            <ContentInner>
                <ButtonBack>
                    <div>
                        <FaChevronLeft />
                    </div>
                    <Link to="/">Voltar</Link>
                </ButtonBack>

                <Title>{title}</Title>
                
                {children}
            </ContentInner>
        </Container>
    );
};