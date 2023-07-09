import { styled } from "styled-components";

export const Container = styled.div`
    grid-area: menu;

    display: grid;
    grid-template-rows: 6.4rem auto 4rem;
    grid-template-columns: 100%;
    grid-template-areas:
    "logo"
    "nav"
    "logout";

    width: ${({ menuAberto }) => (menuAberto ? '100%' : '50%')};;
    height: 100%;

    padding: 2.5rem 2rem;

    background: ${({ theme }) => theme.COLORS.RED};

    position: relative;
`

export const Logo = styled.div`
    grid-area: logo;
    width: 100%;
    height: 100%;
    padding: 0 0 0 2.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: .8rem;

    > img {
        width: 100%;
    }
`;

export const Nav = styled.nav`
    grid-area: nav;
    height: 100%;
    width: 100%;

    > ul {
        list-style: none;
        font-size: 1.4rem;

        margin-top: 7.2rem;

        > li {
            margin-bottom: .8rem;

            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};

            display: flex;
            align-items: center;
            gap: 1.6rem;

            height: 4rem;
            transition: all .2s ease;

            padding: .8rem;
            border-radius: .8rem;

            a {
                width: 100%;
            }

            > svg {
                width: 2.4rem;
                height: 2.4rem;
                fill: ${({ theme }) => theme.COLORS.YELLOW};
            }

            &:hover {
                background: ${({ theme }) => theme.COLORS.WHITE};
                color: ${({ theme }) => theme.COLORS.BLACK};
            }
        }
    }
`;

export const Logout = styled.a`
    grid-area: logout;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    width: 100%;
    height: 100%;

    font-size: 1.2rem;
    font-weight: bold;

    > svg {
        width: 1.6rem;
        height: 1.6rem; 
        fill: ${({ theme }) => theme.COLORS.YELLOW};
    }
`;

export const IconMenu = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    right: -1.6rem;
    top: 4rem;
    cursor: pointer;

    -webkit-box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);
    box-shadow: -2px 0px 9px -4px rgba(0,0,0,0.75);

    > img {
        width: 100%;
        height: 100%;
    }
`;