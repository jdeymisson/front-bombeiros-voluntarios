import { styled } from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.WHITE};

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14rem
`;

export const Logo = styled.div`
    text-align: center;


    width: min(80%, 44rem);
`

export const Form = styled.form`
    > h2 {
        font-size: 3.2rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    flex: 1;
    height: 46rem;
    max-width: 46rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    padding: 6.4rem;

    background: ${({ theme }) => theme.COLORS.RED};

    border-radius: 1.6rem;
`