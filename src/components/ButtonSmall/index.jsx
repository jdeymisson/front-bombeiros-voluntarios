import { Container } from "./styles";

export const ButtonSmall = ({ title, color, handleClick }) => {
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