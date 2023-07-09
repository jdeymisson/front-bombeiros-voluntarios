import { styled } from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    
    width: 100%;
    height: 100%;
    padding: 0 3.2rem;

    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Author = styled.p`
    font-size: 1.4rem;
`;