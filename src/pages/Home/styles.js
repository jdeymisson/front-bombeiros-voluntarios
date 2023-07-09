import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 26rem auto;
    grid-template-rows: 6.4rem auto 4.2rem;
    grid-template-areas:
    "menu header"
    "menu content"
    "menu footer";

    background: ${({ theme }) => theme.COLORS.GRAY_100};
`;