import { Container, Logo, Logout, Nav, IconMenu } from "./styles";
import { FaUserNurse, FaHome, FaUserClock, FaClock, FaPowerOff } from "react-icons/fa"
import logo from "../../assets/logo.png";
import iconMenu from "../../assets/icon-menu.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/authProvider";

export const Menu = ({ openMenu, setOpenMenu }) => {
    const { signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    }

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
                        <Link to="/">
                            <FaHome />
                            {openMenu && <span>Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <FaUserNurse />
                            {openMenu && <span>Usuários</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/providers">
                            <FaUserClock />
                            {openMenu && <span>Prestadores</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/releases">
                            <FaClock />
                            {openMenu && <span to="/releases">Lançamentos</span>}
                        </Link>
                    </li>
                </ul>
            </Nav>
            <Logout 
                to="/"
                onClick={handleSignOut}>
                <FaPowerOff />
                {openMenu && "Sair"}
            </Logout>
        </Container>
    );
};