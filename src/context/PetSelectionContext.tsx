import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCats, getDogs } from '../services/api';
import { IPet } from '../types/PetInterface';

interface IPetSelectionContext {
    selectedPet: string,
    setSelectedPet: React.Dispatch<React.SetStateAction<string>>,
    selectedBreed?: IPet,
    setSelectedBreed: React.Dispatch<React.SetStateAction<any>>,
    petResponse: any,
    setPetResponse: React.Dispatch<React.SetStateAction<any>>
}

const PetSelectionContext = createContext<IPetSelectionContext>({} as IPetSelectionContext);

export const PetSelection: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [selectedBreed, setSelectedBreed] = useState<IPet>({} as IPet);
    const [selectedPet, setSelectedPet] = useState<string>('');
    const [petResponse, setPetResponse] = useState<IPet[]>([{}] as IPet[]);

    useEffect(()=>{
        if(selectedPet === "dog"){
            getDogs()
                .then(response => {
                    setPetResponse(response.data);
                })
                .catch((err)=>{
                    console.log('error', err);
                })
        } else if(selectedPet === "cat"){
            getCats()
                .then(response => {
                    setPetResponse(response.data);
                })
                .catch((err)=>{
                    console.log('erro', err);
                })
        }
    }, [selectedPet]);

    return (
        <PetSelectionContext.Provider
            value={{
                selectedPet,
                setSelectedPet,
                selectedBreed,
                setSelectedBreed,
                petResponse,
                setPetResponse
            }}>
            {children}
        </PetSelectionContext.Provider>
    );
}

export const usePetSelection= () => {
    return useContext(PetSelectionContext);
}