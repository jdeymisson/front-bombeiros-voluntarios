import { Container, Profile } from "./styles";
import { FaUserCircle } from "react-icons/fa"

export const Header = () => {
    return(
        <Container>
            <Profile>
                <FaUserCircle />
            </Profile>
        </Container>
    )
};