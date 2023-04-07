import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { BreedSelect } from "./BreedSelect";
import { Button } from "../../../components/Button";
import { usePetSelection } from "../../../context/PetSelectionContext";

export const Header: React.FC = () => {
    const { setSelectedPet } = usePetSelection();

    return (
        <Container>
            <a href="/"><img src={LogoBanner} alt="Banner"/></a>
            <BreedSelect />
            <div>
                <Button type="submit" onClick={() => setSelectedPet("dog")} style={{btnWidth: 'auto', btnMargin: '0 2rem 0 0', btnHeigth: '100%'}}>
                    {/* <img src={DogIcon} alt="Dog Icon" /> */}
                    <p>Dogs</p>
                </Button>
                <Button type="submit" onClick={() => setSelectedPet("cat")} style={{btnWidth: 'auto', btnHeigth: '100%'}}>
                    {/* <img src={CatIcon} alt="Cat Icon" /> */}
                    <p>Cats</p>
                </Button>
            </div>
        </Container>
    );
};