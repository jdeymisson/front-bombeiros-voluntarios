import { useEffect, useRef } from "react";
import { Container, Form } from "./styles";

export const FormComponent = ({ children, setModalOpen }) => {
    const innerFormRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (innerFormRef.current && !innerFormRef.current.contains(event.target)) {
            setModalOpen(false);
          };
        };
    
        const handleKeyPress = (event) => {
          if (event.key === 'Escape') {
            setModalOpen(false);
          };
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return(
        <Container>
            <Form 
              ref={innerFormRef}>
                {children}
            </Form>
        </Container>
    );
};