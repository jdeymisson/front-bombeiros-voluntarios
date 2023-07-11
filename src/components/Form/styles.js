import { styled } from "styled-components";

export const Container = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > h2 {
        font-size: 3rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    width: min(40rem, 50vw);
    height: 52rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6em;

    padding: 2rem 4rem;

    background: ${({ theme }) => theme.COLORS.RED};

    border-radius: 1.6rem;
    z-index: 100;
    > a {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;