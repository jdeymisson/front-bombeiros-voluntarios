import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

    padding: 1.6rem;
`

export const Logo = styled.div`
    text-align: center;
    width: 100%;

    > div img {
        max-width: 100%;
    }
`
export const Form = styled.div`
    width: 100%;
    
    > form {
        max-width: 48rem;
        height: 45rem;

        > h2 {
            font-size: 3rem;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.6em;
    
        padding: 2rem 4rem;
    
        background: ${({ theme }) => theme.COLORS.RED};
    
        border-radius: 1.6rem;
    
        > a {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }   
    }
`