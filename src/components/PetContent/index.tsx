import { useState } from "react";
import { PetDetails, Content, Select, DetailsFieldset } from "./styles";

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
        if (e.target.value === ''){
            setIsSelected(false);
        } else {
            setSelectedBreed(JSON.parse(e.target.value));
            setIsSelected(true);
        };
    };

    return (
        <Content>
            <Select onChange={handleSelectPet}>
                <option value="" />
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
                        <DetailsFieldset>
                            <legend>Name</legend>
                            <h2 className="breed-name">{selectedBreed?.name}</h2>
                        </DetailsFieldset>
                        <DetailsFieldset>
                            <legend>Origin Country</legend>
                            <p className="breed-country">{selectedBreed?.origin ? selectedBreed?.origin : 'Unknown'}</p>
                        </DetailsFieldset>
                        <DetailsFieldset>
                            <legend>Description</legend>
                            <p className="breed-description">{selectedBreed?.description ? selectedBreed?.description : 'There is no description available'}</p>
                        </DetailsFieldset>
                        <DetailsFieldset>
                            <legend>Temperament</legend>
                            <p className="breed-temperament">{selectedBreed?.temperament ? selectedBreed?.temperament : 'There is no temperament available'}</p>
                        </DetailsFieldset>
                        <DetailsFieldset>
                            <legend>Life span</legend>
                            <p className="breed-life-span">{selectedBreed?.life_span ? selectedBreed?.life_span : 'Unknown'}</p>
                        </DetailsFieldset>
                    </div>
                </PetDetails>
            )}
        </Content>
    );
};