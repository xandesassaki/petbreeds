import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { PetSwitchButton } from "../../../components/PetSwitchButton";
import { usePetSelection } from "../../../context/PetSelectionContext";
import { useNavigate } from "react-router-dom";
import React from "react";

interface IPetSelectionProps{
    showGetStarted: boolean;
}

export const PetSelection: React.FC<IPetSelectionProps> = ({ showGetStarted }) => {
    const { petResponse, selectedPet } = usePetSelection();
    const navigate = useNavigate();

    const handlePetSelected = () => {
        navigate("/pets")
    };

    return (
        <Container showGetStarted={showGetStarted} showBreedsTable={selectedPet === '' ? false : true}>
            <img className="logo-image" src={LogoBanner} alt="Logo" />
            <p className="selection-message">First, choose between :</p>
            <div className="buttons">
                <PetSwitchButton />
            </div>
            <div className="table-section">
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
            </div>
        </Container>
    );
};