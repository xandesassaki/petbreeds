import { usePetSelection } from "../../../../context/PetSelectionContext";
import { IPet } from "../../../../types/PetInterface";
import { Select } from "./styles";

export const BreedSelect: React.FC = () => {
    const {setSelectedBreed, petResponse, selectedPet} = usePetSelection();

    const handleSelectBreed = (e: any) => {
        petResponse.map((breeds: IPet) => {
            if(selectedPet === 'dog'){
                const id = parseInt(e.target.value);
                return breeds.id === id && setSelectedBreed(breeds);
            } else {
                return breeds.id === e.target.value && setSelectedBreed(breeds)
            }
        });
    };

    return (
        <Select onChange={handleSelectBreed}>
            <option>Search here...</option>
            {
                petResponse.map((res: IPet) => {
                    return (
                        <option value={res.id}>
                            {res.name}
                        </option>
                    );
                })
            }
        </Select>
    );
};