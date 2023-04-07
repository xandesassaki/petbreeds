import { usePetSelection } from "../../../../context/PetSelectionContext";
import { Select } from "./styles";

export const BreedSelect: React.FC = () => {
    const {setSelectedBreed, petResponse} = usePetSelection();

    const handleSelectBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setSelectedBreed(e.target.value);
    };

    return (
        <Select onChange={handleSelectBreed}>
            <option>Search here...</option>
            {
                petResponse.map((res: any) => {
                    return (
                        <option value={JSON.stringify(res)}>
                            {res.name}
                        </option>
                    );
                })
            }
        </Select>
    );
};