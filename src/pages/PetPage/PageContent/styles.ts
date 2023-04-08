import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFDEA8;
    height: 37rem;
    width: 110rem;
    padding: 1rem 0;

    border: 0px;
    border-radius: 24px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div{
        margin: 1rem;
    }

    .display-breed{
        height: 100%;
        width: 50%;

        border: 0.5rem solid #5E4200;
        border-radius: 1.5rem;

        display: flex;
        justify-content:center;
        align-items: center;

        overflow: hidden;
        img{
            width: 100%;
        }
    }

    .breed-details{
        height: 100%;
        width: 50%;

        div{
            margin: 0 0 2rem;
        }

        h1{
            font-size: 4rem;
            margin: 2rem 0;
        }
    }
`;

export const Section = styled.b`
    font-size: 1.25rem;
`;

export const SectionContent = styled.p`
    margin-top: 0.5rem;
`;