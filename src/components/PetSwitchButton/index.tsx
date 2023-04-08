import { StyledButton, Container } from "./styles";
import DogIcon from "../../assets/button-dog-icon.png"
import CatIcon from "../../assets/button-cat-icon.png"
import { usePetSelection } from "../../context/PetSelectionContext";

export const PetSwitchButton: React.FC = () => {
    const { setSelectedPet, selectedPet } = usePetSelection();

    const handleDogList = () => {
        setSelectedPet('dog');
    };

    const handleCatList = () => {
        setSelectedPet('cat');
    };

    return (
        <Container>
            <StyledButton onClick={handleDogList} isSelected={selectedPet === 'dog' ? true : false}>
                <img src={DogIcon} alt="Dog Icon"  className="pet-icon"/>
                <p>Dog</p>
            </StyledButton>
            <StyledButton onClick={handleCatList} isSelected={selectedPet === 'cat' ? true : false}>
                <img src={CatIcon} alt="Cat Icon" className="pet-icon"/>
                <p>Cat</p>
            </StyledButton>
        </Container>
    );
};