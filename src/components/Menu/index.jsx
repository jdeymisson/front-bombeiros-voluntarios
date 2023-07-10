import { useState } from "react";
import { Container, Logo, Logout, Nav, IconMenu } from "./styles";
import { FaUserNurse, FaHome, FaUserClock, FaClock, FaPowerOff } from "react-icons/fa"
import logo2 from "../../assets/logo-2.jpg";
import logo from "../../assets/logo.png";
import iconMenu from "../../assets/icon-menu.png";

export const Menu = ({ openMenu, setOpenMenu }) => {
    return(
        <Container>
            <IconMenu openmenu={openMenu.toString()} onClick={() => setOpenMenu(prevState => !prevState)}>
                <img src={iconMenu} alt="Icone Menu" />
            </IconMenu>
            <Logo>
                <div>
                    <img src={logo} alt="Logo dos Bombeiros Voluntários"/>
                </div>
                {openMenu && 
                    <label>
                        Bombeiros
                        <p>Voluntários</p>
                    </label>}
            </Logo>
            <Nav>
                <ul>
                    <li>
                        <FaHome />
                        {openMenu && <a>Home</a>}
                    </li>
                    <li>
                        <FaUserNurse />
                        {openMenu && <a>Usuários</a>}
                    </li>
                    <li>
                        <FaUserClock />
                        {openMenu && <a>Prestadores</a>}
                    </li>
                    <li>
                        <FaClock />
                        {openMenu && <a>Lançamentos</a>}
                    </li>
                </ul>
            </Nav>
            <Logout>
                <FaPowerOff />
                {openMenu && "Sair"}
            </Logout>
        </Container>
    );
};