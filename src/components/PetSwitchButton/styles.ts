import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: #F5BE56;
    padding: 0.5rem;
    width: 47.5%;
    height: 100%;

    border: 0 solid;
    border-radius: 4rem;

    color: black;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }

    .pet-icon{
        width: 1rem;
        margin-right: 0.75rem;
    }
`;