import styled, { keyframes } from "styled-components";

interface IContainerProps{
    showGetStarted: boolean;
    showBreedsTable: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div<IContainerProps>`
    opacity: ${({ showGetStarted }) => !showGetStarted ? '1' : 0};
    animation: ${({ showGetStarted }) => !showGetStarted && fadeIn} 1s ease-in-out;

    height: 100%;
    width: 50vw;

    margin: 0 2rem;
    padding: 4rem 0;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    .selection-message{
        font-size: 1.5rem;
        margin: 1.5rem 0;
    }

    .logo-image{
        margin: 3rem 0;
        width: 70%;
    }

    .buttons{
        width: 100%;
        height: 3.5rem;

        p{
            font-size: 1rem;
        }
    }

    .table-section{
      opacity: ${({ showBreedsTable }) => showBreedsTable ? '1' : 0};
      animation: ${({ showBreedsTable }) => showBreedsTable && fadeIn} 1s ease-in-out;
    }

    .breeds-table{
      background-color: #FFDEA8;

      height: 27rem;
      width: 100%;
      padding: 0.75rem 1.5rem;

      border: 0px;
      border-radius: 30px;

      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 0.75rem;
        margin: 1rem;
      }

      ::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
      }

      option{
        margin-bottom: 0.5rem;
        padding-left: 0.25rem;

        font-size: 1.25rem;

        border:none;
        border-radius: 5px;

        cursor: pointer;

        &:hover{
          color: white;
          background-color: #7C5800;

          transition: color 0.5s ease, background-color 0.5s ease;
        }

        transition: color 0.5s ease, background-color 0.5s ease;
      }
    }
`;