import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageContent } from "./PageContent";
import { Container } from "./styles";

export const PetPage: React.FC = () => {
    return (
        <Container>
            <Header />
            <PageContent />
            <Footer />
        </Container>
    );
};