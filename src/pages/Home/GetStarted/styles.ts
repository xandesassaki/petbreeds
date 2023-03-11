import styled, { keyframes } from "styled-components";

interface IContainerProps {
    showGetStarted: boolean;
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div<IContainerProps>`
    height: 100%;
    width: 50vw;

    margin: 0 2rem;
    padding: 5rem;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    animation: ${({ showGetStarted }) => !showGetStarted && fadeOut} 1s ease-out;
    opacity: ${({ showGetStarted }) => showGetStarted ? '1' : 0};

    img{
        width: 100%;
    }

    span{
        font-family: 'Amaranth', sans-serif;
        font-size: 2rem;
    }

    .get-started-message{
        margin: 2rem 0 4rem 0;
    }
`;