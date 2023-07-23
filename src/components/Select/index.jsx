import { Container } from "./styles";

export const Select = ({ options, admin, selectedValue, ...rest }) => {
    return(
        <Container {...rest} value={selectedValue ? 2 : 1}>
            {options.map(option => <option 
                    key={option.id}
                    value={option.id}
                >{option.description}</option>)}
        </Container>
    );
};