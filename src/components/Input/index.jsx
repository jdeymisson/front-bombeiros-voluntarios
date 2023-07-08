import { Container, Label, Input } from "./styles";

export const InputComponent = ({ id, title, type, ...rest }) => {
    return(
        <Container>
            <Label htmlFor={id}>{title}</Label>
            <Input 
                id={id}
                type={type} 
                {...rest}
            />
        </Container>
    )
};