import { useState, useRef, useEffect } from "react";
import { FormComponent } from "../Form";
import { InputComponent } from "../Input";
import { Container, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa"
import { ButtonComponent } from "../Button";

export const Header = () => {
    const [modalProfileOpen, setModalProfileOpen] = useState(false);
    const innerFormRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (innerFormRef.current && !innerFormRef.current.contains(event.target)) {
            setModalProfileOpen(false);
          };
        };
    
        const handleKeyPress = (event) => {
          if (event.key === 'Escape') {
            setModalProfileOpen(false);
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
            <Profile onClick={() => setModalProfileOpen(!modalProfileOpen)}>
                <FaUserCircle />
            </Profile>

           {modalProfileOpen && 
            <div className="filter">
                <FormComponent innerFormRef={innerFormRef}>
                    <h2>JOHNNY DEYMISSON</h2>
                    <InputComponent
                        id="name"
                        type="text"
                        placeholder="Ex: Johnny"
                        title="Seu nome"
                    />
                    <InputComponent
                        id="cpf"
                        type="text"
                        placeholder="Ex: 333.444.555-52"
                        title="CPF"
                    />
                    <InputComponent
                        id="email"
                        type="text"
                        placeholder="Ex: bombeiros@gmail.com"
                        title="Email"
                    />
                    <InputComponent
                        id="password"
                        type="password"
                        placeholder="********"
                        title="Senha"
                    />
                    <ButtonComponent title="Salvar"/>
                </FormComponent>
            </div>
            }
        </Container>
    )
};