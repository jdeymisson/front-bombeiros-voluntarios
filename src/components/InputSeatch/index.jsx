import { useRef, useEffect } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";

export const InputSearch = ({ placeholder, inputRef, ...rest }) => {
    return(
        <Container>
            <div>
                <FaSearch />
            </div>
            <Input 
                ref={inputRef} 
                placeholder={placeholder}
                {...rest}
            />
        </Container>
    );
};