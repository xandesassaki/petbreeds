import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { PetSwitchButton } from "../../../components/PetSwitchButton";
import { usePetSelection } from "../../../context/PetSelectionContext";
import { useNavigate } from "react-router-dom";

interface IPetSelectionProps{
    showGetStarted: boolean;
}

export const PetSelection: React.FC<IPetSelectionProps> = ({ showGetStarted }) => {
    const { petResponse } = usePetSelection();
    const navigate = useNavigate();

    const handlePetSelected = () => {
        navigate("/pets")
    };

    return (
        <Container showGetStarted={showGetStarted}>
            <img className="logo-image" src={LogoBanner} alt="Logo" />
            <p className="selection-message">First, choose between :</p>
            <div className="buttons">
                <PetSwitchButton />
            </div>
            <p className="selection-message">Now, choose a breed :</p>
            <div className="breeds-table">
            {
                petResponse.map((res: any) => {
                    return (
                        <option value={JSON.stringify(res)} onClick={handlePetSelected}>
                            {res.name}
                        </option>
                    );
                })
            }
            </div>
        </Container>
    );
};