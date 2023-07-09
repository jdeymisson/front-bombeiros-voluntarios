import { styled } from "styled-components";

export const Container = styled.div`
    grid-area: menu;

    display: grid;
    grid-template-rows: 9.6rem auto 4rem;
    grid-template-columns: 100%;
    grid-template-areas:
    "logo"
    "nav"
    "logout";

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.COLORS.RED};
`

export const Logo = styled.div`
    grid-area: logo;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Nav = styled.nav`
    grid-area: nav;
    height: 100%;
    width: 100%;
`;

export const Logout = styled.a`
    grid-area: logout;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #ddd;
`;
