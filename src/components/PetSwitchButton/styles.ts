import styled from "styled-components";

interface IProps{
    isSelected?: boolean;
}

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button<IProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${({isSelected}) => isSelected ? "#F5BE56" : "#FFDEA8"};
    padding: 0.5rem;
    width: 47.5%;
    height: 100%;

    border: ${({isSelected}) => isSelected ? "2px solid black" : "0 solid"};
    border-radius: 4rem;

    color: black;

    transition: background-color 0.2s;

    &:hover{
        background-color: #F5BE56;
        transition: background-color 0.2s;
    }

    .pet-icon{
        width: 1rem;
        margin-right: 0.75rem;
    }
`;