import styled from "styled-components";

export const Container = styled.div`
    height: 40%;
    width: 100%;

    margin: 0;
    padding: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .selection-message{
        font-size: 2rem;
        margin: 2rem 0;
    }

    img{
        width: 100%;
    }

    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: 100%;

        p{
            font-size: 1rem;
        }

        img{
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;