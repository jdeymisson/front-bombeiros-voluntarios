import { Container } from "./styles";

export const FormComponent = ({ children, innerFormRef }) => {
    return(
        <Container ref={innerFormRef}>
            {children}
        </Container>
    )
};