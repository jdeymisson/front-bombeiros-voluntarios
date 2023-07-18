import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 40px;
    
    background: ${({ theme, color }) => theme.COLORS[color]};
    
    color: ${({ theme, color }) => color === "YELLOW" ? theme.COLORS.BLACK : theme.COLORS.WHITE};
    font-weight: 700;

    border: 0;
    border-radius: .8rem;
`;