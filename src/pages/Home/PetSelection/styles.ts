import styled, { keyframes } from "styled-components";

interface IContainerProps{
    showGetStarted: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div<IContainerProps>`
    height: 100vh;
    width: 50vw;

    opacity: ${({ showGetStarted }) => !showGetStarted ? '1' : 0};
    animation: ${({ showGetStarted }) => !showGetStarted && fadeIn} 1s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;