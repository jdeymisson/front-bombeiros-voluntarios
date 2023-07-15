import { useState } from "react";
import { Container } from "./styles";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export const Users = ({ openMenu, setOpenMenu }) => {
    return(
        <Container openmenu={openMenu.toString()}>
            <Menu   
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
            />
            <Header />
            <Content 
                title="Usuários" 
            />
            <Footer />
        </Container>
    );
};
