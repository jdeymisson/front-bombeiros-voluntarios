import { Container } from "./styles";

export const ButtonComponent = ({ title, color, handleClick }) => {
    const confirmAction = () => {
        handleClick();
    };

    return(
        <Container 
            color={color}
            onClick={confirmAction}
        >
            {title}
        </Container>
    )
};