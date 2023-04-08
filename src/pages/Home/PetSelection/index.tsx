import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { PetSwitchButton } from "../../../components/PetSwitchButton";
import { usePetSelection } from "../../../context/PetSelectionContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import { IPet } from "../../../types/PetInterface";

interface IPetSelectionProps{
    showGetStarted: boolean;
}

export const PetSelection: React.FC<IPetSelectionProps> = ({ showGetStarted }) => {
    const { petResponse, selectedPet, setSelectedBreed } = usePetSelection();
    const navigate = useNavigate();

    const handlePetSelected = (e: any) => {
        petResponse.map((breeds: IPet) => {
            if(selectedPet === 'dog'){
                const id = parseInt(e.target.value);
                return breeds.id === id && setSelectedBreed(breeds);
            } else {
                return breeds.id === e.target.value && setSelectedBreed(breeds)
            }
        });
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
                    petResponse.map((res: IPet) => {
                        return (
                            <option value={res.id} onClick={handlePetSelected}>
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