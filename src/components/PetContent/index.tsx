import { useState } from "react";
import { PetDetails, Content, Select } from "./styles";

interface IProps{
    petResponse: IPet[];
}

interface IImage{
    id: string;
    url: string;
};

interface IPet {
    description: string;
    id: string;
    life_span: string;
    name: string;
    image: IImage;
    origin: string;
    temperament: string;
};

export const PetContent: React.VFC<IProps> = ({ petResponse }) => {
    const [selectedBreed, setSelectedBreed] = useState<IPet>();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleSelectPet = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedBreed(JSON.parse(e.target.value));
        setIsSelected(true);
    };

    return (
        <Content>
            <Select onChange={handleSelectPet}>
                {petResponse?.map((res)=>{
                    return(
                        <option value={JSON.stringify(res)}>{res.name}</option>
                    );
                })}
            </Select>
            {isSelected && (
                <PetDetails>
                    <div className="display-pet">
                        <img src={selectedBreed?.image?.url ? selectedBreed?.image?.url : "pet-not-found.png"} alt="Pet" className="pet-img"/>
                    </div>
                    <div className="breed-details">
                        <div>
                            <h2 className="breed-name">{selectedBreed?.name}</h2>
                            <p className="breed-country">Origin country: {selectedBreed?.origin ? selectedBreed?.origin : 'Unknown'}</p>
                        </div>
                        <p className="breed-description">{selectedBreed?.description ? selectedBreed?.description : 'There is no description available'}</p>
                        <p className="breed-temperament">{selectedBreed?.temperament ? selectedBreed?.temperament : 'There is no temperament available'}</p>
                        <p className="breed-life-span">It's life span is: {selectedBreed?.life_span ? selectedBreed?.life_span : 'Unknown'}</p>
                    </div>
                </PetDetails>
            )}
        </Content>
    );
};