import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: ${({ theme }) => theme.COLORS.GRAY};

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14rem;

    padding: 1.6rem;

    @media (max-width: 90rem) {
        gap: 1rem
    }
`;

export const Logo = styled.div`
    text-align: center;
    > img {
        width: min(49rem, 50vw);
    }
`
export const Form = styled.form`
    > h2 {
        font-size: 3rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    width: min(40rem, 50vw);
    max-width: 46rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    padding: 4rem;

    background: ${({ theme }) => theme.COLORS.RED};

    border-radius: 1.6rem;

    > a {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`