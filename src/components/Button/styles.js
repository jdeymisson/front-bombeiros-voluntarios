import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;
    
    background: ${({ theme }) => theme.COLORS.YELLOW};

    border: 0;
    border-radius: .8rem;

    font-weight: 700;
`;