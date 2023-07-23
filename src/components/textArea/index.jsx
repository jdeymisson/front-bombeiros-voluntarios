import { Container, Label, TextArea } from "./styles";

export const TextareaComponent = ({ id, title, ...rest }) => {
    return(
        <Container>
            <Label htmlFor={id}>{title}</Label>
            <TextArea 
                id={id}
                {...rest}
            />
        </Container>
    )
};