import { Container } from "./styles";

export const Footer: React.FC = () => {
    return (
        <Container>
            <label>
                This website was develop by&nbsp;
                <a href="https://www.linkedin.com/in/alexandre-sassaki/" target="_blank" rel="noreferrer">Alexandre Sassaki</a>
                &nbsp;and designed by&nbsp;
                <a href="https://www.linkedin.com/in/luizzague/" target="_blank" rel="noreferrer">Luiz Zague</a>
                &nbsp;for study purposes only, using&nbsp;
                <a href="https://thecatapi.com" target="_blank" rel="noreferrer">The Cat API</a>
                &nbsp;and&nbsp;
                <a href="https://thedogapi.com" target="_blank" rel="noreferrer">The Dog API</a>
                &nbsp;by&nbsp;
                <a href="https://thatapicompany.com" target="_blank" rel="noreferrer">That API Company.</a>
            </label>
            <b>2023</b>
        </Container>
    );
};