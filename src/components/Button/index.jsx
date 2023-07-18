import { Container } from "./styles";

export const ButtonComponent = ({ title, color, loading=false, ...rest }) => {
    return (
        <Container  
            type="button"
            disabled={loading}
            color={color}
            {...rest}
        >
            { loading ? "Carregando..." : title }
        </Container>
    );
};
