import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container } from "./styles";
export const Home = ({ openMenu, setOpenMenu }) => {
    return(
        <Container openmenu={openMenu.toString()}>
            <Menu   
                setOpenMenu={setOpenMenu}
                openMenu={openMenu}
            />
            <Header />
            <Footer />
        </Container>
    );
};
