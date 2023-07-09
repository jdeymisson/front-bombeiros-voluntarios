import { styled } from "styled-components";

export const Container = styled.header`
    grid-area: header;
    
    height: 100%;
    width: 100%;
    padding: 0 3.2rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
`; 

export const Profile = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;

    > svg {
        fill: ${({ theme }) => theme.COLORS.RED};
        width: 100%;
        height: 100%;
    }
`;