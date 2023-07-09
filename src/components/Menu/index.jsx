import { useState } from "react";
import { Container, Logo, Logout, Nav, IconMenu } from "./styles";
import { FaUserNurse, FaHome, FaUserClock, FaClock, FaPowerOff } from "react-icons/fa"
import logo from "../../assets/logo-2.jpg";
import iconMenu from "../../assets/icon-menu.png";

export const Menu = () => {
    const [ openMenu, setOpenMenu] = useState(true);
    console.log(openMenu, "*****")
    return(
        <Container openMenu={openMenu}>
            <IconMenu onClick={() => setOpenMenu(!openMenu)}>
                <img src={iconMenu} alt="Icone Menu" />
            </IconMenu>
            <Logo>
                <img src={logo} alt="Logo dos Bombeiros Voluntários"/>
            </Logo>
            <Nav>
                <ul>
                    <li>
                        <FaHome />
                        <a>Home</a>
                    </li>
                    <li>
                        <FaUserNurse />
                        <a>Usuários</a>
                    </li>
                    <li>
                        <FaUserClock />
                        <a>Prestadores</a>
                    </li>
                    <li>
                        <FaClock />
                        <a>Lançamentos</a>
                    </li>
                </ul>
            </Nav>
            <Logout>
                <FaPowerOff />
                Sair
            </Logout>
        </Container>
    );
};