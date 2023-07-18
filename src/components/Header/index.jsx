import { useState } from "react";
import { Container, Profile } from "./styles";
import { ButtonComponent } from "../Button";
import { InputComponent } from "../Input";
import { FormComponent } from "../Form";
import { FaUserCircle } from "react-icons/fa"

export const Header = () => {
    const [modalProfileOpen, setModalProfileOpen] = useState(false);
    
    return(
        <Container>
            <Profile onClick={() => setModalProfileOpen(!modalProfileOpen)}>
                <FaUserCircle />
            </Profile>

            {modalProfileOpen && 
            <FormComponent 
                setModalProfileOpen={setModalProfileOpen}
                modalProfileOpen={modalProfileOpen}
            >
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
                <ButtonComponent 
                    title="Salvar" 
                    color="YELLOW"
                />
            </FormComponent>
            }
        </Container>
    );
};