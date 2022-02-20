
import { useEffect, useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import { catApi } from "../../services/api";
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

export const CatPage: React.VFC = () => {
    const [petResponse, setPetResponse] = useState<IPet[]>([{}] as IPet[]);

    useEffect(()=>{
        const config = {
            headers: {'x-api-key': '25220bbb-f80f-4efc-97a4-5e309c7790ab'},
        }

        catApi.get<IPet[]>('/breeds', config)
        .then(response => {
            setPetResponse(response.data);
            console.log('response', response.data);
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