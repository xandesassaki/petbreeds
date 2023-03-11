import { Container } from "./styles";
import image from "../../../assets/Imagem.png"

interface IHomeBannerProps{
    showGetStarted: boolean;
}

export const HomeBanner: React.FC<IHomeBannerProps> = ({ showGetStarted }) => {
    return (
        <Container showGetStarted={showGetStarted}>
            <img src={image} alt="Banner"/>
        </Container>
    );
};