import { Container } from "./styles";
import LogoBanner from "../../../../assets/logo-banner.png"
import DogIcon from "../../../../assets/button-dog-icon.png"
import CatIcon from "../../../../assets/button-cat-icon.png"
import { Button } from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import { usePetSelection } from "../../../../context/PetSelectionContext";

export const SelectionButton: React.FC = () => {
    const navigate = useNavigate();
    const { setSelectedPet } = usePetSelection();

    const handleDogList = () => {
        setSelectedPet('dog');
        navigate('/pets');
    };

    const handleCatList = () => {
        setSelectedPet('cat');
        navigate('/pets');
    };

    return (
        <Container>
            <img src={LogoBanner} alt="Logo" />
            <p className="selection-message">First, choose between :</p>
            <div className="buttons">
                <Button type="submit" onClick={handleDogList}>
                    <img src={DogIcon} alt="Dog Icon" />
                    <p>Dogs</p>
                </Button>
                <Button type="submit" onClick={handleCatList}>
                    <img src={CatIcon} alt="Cat Icon" />
                    <p>Cats</p>
                </Button>
            </div>
        </Container>
    );
};