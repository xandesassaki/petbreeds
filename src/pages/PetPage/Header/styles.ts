import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 2rem 4rem;

    display: flex;
    flex-direction: row;
    align-items: center;

    img{
        width: 15rem;
    }

    div{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;