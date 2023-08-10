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

    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const Logo = styled.div`
    text-align: center;
    width: 100%;

    > div img {
        max-width: 100%;
    }

    @media (max-width: 768px){
        > div img {
            width: 70%;
            padding-top: 2rem;
        };
    }
`
export const Form = styled.div`
    width: 100%;

    > form {
        max-width: 42rem;
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
    
        padding: 4rem;
    
        background: ${({ theme }) => theme.COLORS.RED};
    
        border-radius: 1.6rem;
    
        > a {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }   
    }

    @media (max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;

        > form {
            width: 70%;
        }
    }
`