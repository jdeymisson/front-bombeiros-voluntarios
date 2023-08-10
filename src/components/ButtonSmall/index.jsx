import { Container } from "./styles";

export const ButtonSmall = ({ title, color, ...rest }) => {
    return(
        <Container 
            color={color}
            {...rest}
        >
            {title}
        </Container>
    )
};