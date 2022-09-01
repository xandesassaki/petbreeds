
import { Wrapper } from "../../components/Wrapper";
import { dogApi } from "../../services/api";
import { useEffect, useState } from "react";
import { PetContent } from "../../components/PetContent";

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
    const [petResponse, setPetResponse] = useState<IPet[]>([{}] as IPet[]);

    useEffect(()=>{
        const config = {
            headers: {'x-api-key': 'a07196cc-ac47-4af8-b225-9c607d885658'},
        }

        dogApi.get<IPet[]>('/breeds', config)
        .then(response => {
            setPetResponse(response.data);
        })
        .catch((err)=>{
            console.log('erro', err);
        })
    }, []);

    return (
        <Wrapper>
            <PetContent petResponse={petResponse}/>
        </Wrapper>
    );
};