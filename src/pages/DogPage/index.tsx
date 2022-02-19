
import { Wrapper } from "../../components/Wrapper";
import { Content, PetDetails, Select } from "./styles";
import { dogApi } from "../../services/api";
import { useEffect, useState } from "react";

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

export const DogPage: React.VFC = () => {
    const [petResponse, setPetResponse] = useState<IPet[]>();
    const [selectedBreed, setSelectedBreed] = useState<IPet>();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(()=>{
        const config = {
            headers: {'x-api-key': 'a07196cc-ac47-4af8-b225-9c607d885658'},
        }

        dogApi.get<IPet[]>('/breeds', config)
        .then(response => {
            setPetResponse(response.data);
            console.log('response', response.data);
        })
        .catch((err)=>{
            console.log('erro', err);
        })
    }, []);

    const handleSelectPet = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedBreed(JSON.parse(e.target.value));
        setIsSelected(true);
    };

    return (
        <Wrapper>
            <Content>
                <Select onChange={handleSelectPet} defaultValue="">
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
        </Wrapper>
    );
};