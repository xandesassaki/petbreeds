import styled from "styled-components";

export const Container = styled.header`
    background: #c4af62;
    height: 4rem;
    width: 100%;

    position: fixed;
    z-index: 999;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const PagesButton = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.5s;

    border: 1px solid #cecece;

    p{
        visibility: hidden;
        opacity: 0;
        transition: margin 1s, visibility 0.5s, opacity 1s ease;
    };

    &:hover{
        cursor: pointer;

        background-color: #9ebd75;
        filter: brightness(0.9);

        p{
            margin: 0 2rem;

            visibility: visible;
            opacity: 1;
        }

    }

    @media only screen and (max-width: 768px){
        img{
            display: none;
        }
        p{
            margin: 0;
            visibility: visible;
            transition: none;
            opacity: 1;
        }
    }
`;