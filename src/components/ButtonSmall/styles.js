import { styled } from "styled-components";

export const Container = styled.button`
    width: 4rem;
    height: 2.4rem;
    
    background: ${({ theme, color }) => theme.COLORS[color]};
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 1rem;

    border: 0;
    border-radius: .4rem;
    margin-right: .4rem;
`;