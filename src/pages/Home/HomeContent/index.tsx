import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const HomeContent: React.FC = () => {
    const navigate = useNavigate();

    const navigateDogsList = () => {
        navigate('/dogs');
    };

    const navigateCatsList = () => {
        navigate('/cats');
    };

    return (
        <Container>
            <div className="welcome-messages">
                <h1>Welcome to PetBreeds!</h1>
                <p>Here you can search for dogs or cats by their breed!</p>
            </div>
            <div className="pet-select-container">
                <p>Chose your pet!</p>
                <div className="pet-select-buttons">
                    <button type="submit" onClick={navigateDogsList}>dogs</button>
                    <button type="submit" onClick={navigateCatsList}>cats</button>
                </div>
            </div>
        </Container>
    );
};