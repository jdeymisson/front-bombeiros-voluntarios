import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: ${({ openmenu }) => openmenu === "true" ? '20rem auto' : '10rem auto'};
    grid-template-rows: 6.4rem auto 4.2rem;
    grid-template-areas:
    "menu header"
    "menu content"
    "menu footer";
    transition: grid-template-columns 0.3s linear;
    background: ${({ theme }) => theme.COLORS.GRAY_100};


    .btnNewProvider {
        width: 100%;
        margin-top: 1.6rem;
        display: flex;
        justify-content: flex-end;

        > button {
            width: 10rem;
        }
    }
`;