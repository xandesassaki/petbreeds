import styled from "styled-components";

interface IButtonProps{
    btnWidth?: string,
    btnHeigth?: string
    btnMargin?: string,
}

export const StyledButton = styled.button<IButtonProps>`
    background-color: #F5BE56;
    padding: 0.5rem;
    margin: ${({ btnMargin }) => btnMargin || 0};
    width: ${({ btnWidth }) => btnWidth || 'auto'};
    height: ${({ btnHeigth }) => btnHeigth || 'auto'};
    min-width: 50%;

    border: 0px solid;
    border-radius: 4rem;

    color: white;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`;