import { useRef, useEffect } from "react";
import { Container, Input } from "./styles";
import { FaSearch } from "react-icons/fa";

export const InputSearch = ({ placeholder }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    return(
        <Container>
            <div>
                <FaSearch />
            </div>
            <Input ref={inputRef} placeholder={placeholder} />
        </Container>
    );
};