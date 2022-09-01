import styled from "styled-components";

export const Content = styled.div`
    background: #b4b691;
    margin: 0;
    padding-top: 4rem;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: none;
    }
`;

export const Select = styled.select`
    width: 50%;
    min-width: 360px;
    height: 35px;
    margin: 16px 0;
    padding: 0 16px;

    position: fixed;
    top: 4rem;

    color: gray;
    font-size: 1rem;

    border: none;
    border-radius: 25px;

    cursor: pointer;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        height: 20px;
        padding: 0px 2px 1px;
    }
    @media only screen and (max-width: 768px){
        min-width: 220px;

        position: static;
    }
`;

export const PetDetails = styled.div`
    width: 100%;

    display: flex;
    flex-direction: Row;
    align-items: center;
    justify-content: space-around;
    .display-pet{
        width: 50%;
        display: flex;
        justify-content: center;
        .pet-img{
            background-position: center;
            max-width: 560px;
            max-height: 560px;

            border-radius: 10%;
            box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.6);
        }
    }
    .breed-details{
        width: 50%;

        margin: 1rem;
        padding: 1rem;
        max-width: 560px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div{
            margin: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            h2{
                font-size: 2rem;
            }
        }
        p{
            margin: 1rem 0;
            text-align: center;
        }
        .breed-description{
            margin: 1.5rem 0;
            font-size: 1.5rem;
            text-align: justify;
        }
    }
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        .display-pet{
            max-width: 320px;
            max-height: 320px;
            .pet-img{
                max-width: 320px;
                max-height: 320px;
            }
        }
        .breed-details{
            max-width: 320px;
        }
    }
`;

export const DetailsFieldset = styled.fieldset`
    padding: 1rem;
    border: none;
    border-radius: 1rem;

    background-color: rgba(255,255,255,0.3);

    display: flex;
    align-items: center;
    justify-content: center;
`;