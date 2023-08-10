import { useState } from "react";
import { Container, Input, InputSeachContainer, DataOptionContainer, DataOption } from "./styles";
import { FaSearch } from "react-icons/fa";

export const InputSearchSelect= ({inputRef, dataOptions, search, setProvider, ...rest }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const handleClick = (option) => {
        setProvider(option);
        setInputFocus(false);
    }
    return(
        <Container>
            <InputSeachContainer>
                <div>
                    <FaSearch />
                </div>
                <Input 
                    ref={inputRef}
                    onFocus={() => setInputFocus(true)}
                    {...rest}
                />
            </InputSeachContainer>

            <DataOptionContainer>
                {inputFocus && dataOptions.map(option => <DataOption 
                    key={option.id}
                    onClick={() => handleClick(option)} 
                    id={option.id}>{option.name}
                </DataOption>)}
            </DataOptionContainer>
        </Container>
    );
};