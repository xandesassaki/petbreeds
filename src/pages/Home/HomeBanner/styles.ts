import styled from "styled-components";

interface IContainerProps {
    showGetStarted: boolean;
}

export const Container = styled.div<IContainerProps>`
    width: 50vw;

    display: flex;
    justify-content: center;

    position: absolute;
    left: 50%;

    transform: ${({ showGetStarted }) => !showGetStarted && "translateX(-100%)"};
    transition: transform 1s;

    img{
        width: 80%;
    }
`;