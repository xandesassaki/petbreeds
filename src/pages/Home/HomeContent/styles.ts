import styled from "styled-components";

export const Container = styled.div`
    height: 75vh;
    width: 900px;
    background: rgba(255, 255, 255, 0.5);

    border-radius: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .welcome-messages{
        margin: auto;
        text-align: center;

        h1{
            font-size: 3rem;
            animation: fadeIn 1s;
        }
        p{
            font-size: 1.5rem;
            animation: fadeIn 2s;
        }
    }
    .pet-select-container{
        margin: auto;
        text-align: center;

        animation: fadeIn 3s;

        p{
            display: block;
            font-size: 2rem;
        }
        .pet-select-buttons{
            margin: 2rem 0;

            display: flex;
            flex-direction: row;
            justify-content: space-around;

            button{
                background: #9ebd75;
                font-size: 1rem;
                color: #fff;

                border: 1px solid #fff;
                border-radius: 0.5rem;
                padding: 0 1rem;
                height: 2rem;

                transition: filter 0.2s;

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }
    }

    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px){
        padding: 0 1rem;
        .welcome-messages{
            h1{
                font-size: 2rem;
            }
        }
    }
`;