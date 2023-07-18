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
                    <a>Voltar</a>
                </ButtonBack>

                <Title>{title}</Title>
                
                {children}
            </ContentInner>
        </Container>
    );
};