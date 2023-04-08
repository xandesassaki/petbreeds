import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { BreedSelect } from "./BreedSelect";
import { PetSwitchButton } from "../../../components/PetSwitchButton";

export const Header: React.FC = () => {
    return (
        <Container>
            <a href="/"><img src={LogoBanner} alt="Banner"/></a>
            <BreedSelect />
            <div>
                <PetSwitchButton />
            </div>
        </Container>
    );
};