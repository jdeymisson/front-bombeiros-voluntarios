import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    grid-area: menu;

    display: grid;
    grid-template-rows: 6.4rem auto 4rem;
    grid-template-columns: 100%;
    grid-template-areas:
    "logo"
    "nav"
    "logout";
    
    height: 100%;

    padding: 2.5rem 2rem;

    background: ${({ theme }) => theme.COLORS.RED};

    position: relative;

    -webkit-box-shadow: 6px 0px 22px -10px rgba(130,122,130,1);
    -moz-box-shadow: 6px 0px 22px -10px rgba(130,122,130,1);
    box-shadow: 6px 0px 22px -10px rgba(130,122,130,1);
`

export const Logo = styled.div`
    grid-area: logo;
    width: 100%;
    height: 100%;
    padding: .8rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    background: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: .8rem;

    label {
        flex: 1;

        font-size: 1.4rem;
        font-weight: 700;

        > p {
            font-size: 1rem;
            text-align: center;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.RED};
        }
    }

    > img {
        width: 100%;
        height: 100%;
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

            height: 4rem;
            transition: all .2s ease;

            padding: .8rem;
            border-radius: .8rem;

            span {
                width: 100%;
                color: ${({ theme }) => theme.COLORS.WHITE};
                padding: 8px;
            }

            a {
                width: 100%;
                height: 100%;
                display: flex;
                gap: 1.6rem;
                align-items: center;
                justify-content: center;
            }

            > a svg {
                width: 2.4rem;
                height: 2.4rem;
                fill: ${({ theme }) => theme.COLORS.YELLOW};
            }

            &:hover {
                background: ${({ theme }) => theme.COLORS.WHITE};
                > a span {
                    color:  ${({ theme }) => theme.COLORS.BLACK}
                }
            }
        }
    }
`;

export const Logout = styled(Link)`
    grid-area: logout;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.COLORS.BLACK};

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

    transition: all .2s;

        transform: ${({ openmenu }) => openmenu === "false" ? "rotateY(180deg)" : "rotateY(0deg)"};

    > img {
        width: 100%;
        height: 100%;
    }
`;