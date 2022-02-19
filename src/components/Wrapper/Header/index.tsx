import { useNavigate } from "react-router-dom";
import { Container, PagesButton } from "./styles";

export function Header() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const navigateDogPage = () => {
        navigate('/dogs');
    };

    const navigateCatPage = () => {
        navigate('/cats');
    };

    return (
        <Container>
            <PagesButton onClick={navigateHome}>
                <img src="home-icon.png" alt="Dogs"/>
                <div className="home-select"><p>Home</p></div>
            </PagesButton>
            <PagesButton onClick={navigateDogPage}>
                <img src="dog-icon.png" alt="Dogs"/>
                <div className="home-select"><p>Dogs</p></div>
            </PagesButton>
            <PagesButton onClick={navigateCatPage}>
                <img src="cat-icon.png" alt="Cats" />
                <div className="home-select"><p>Cats</p></div>
            </PagesButton>
        </Container>
    );
};