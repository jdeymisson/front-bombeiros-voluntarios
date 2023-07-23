import { useEffect, useRef } from "react";
import { ButtonComponent } from "../Button";
import { Container, ContentConfirmAction } from "./styles";

export const ConfirmAction = ({ text, handleClickCofirm, handleClickCancel, openModalActionConfirm }) => {
    const innerConfirmRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (innerConfirmRef.current && !innerConfirmRef.current.contains(event.target)) {
                handleClickCancel();
            };
        };
    
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                handleClickCancel();
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
        <>
        {openModalActionConfirm ?
            <Container>
                <ContentConfirmAction ref={innerConfirmRef}>
                    <p>{text}</p>
                    <div className="actions-buttons">
                        <ButtonComponent
                            title="Cancelar" 
                            color="BLACK"
                            onClick={handleClickCancel}
                        />
                        <ButtonComponent 
                            title="Confirmar" 
                            color="YELLOW"
                            onClick={handleClickCofirm}
                        />
                    </div>
                </ContentConfirmAction>
            </Container>
            : null
        }
        </>
    );
};