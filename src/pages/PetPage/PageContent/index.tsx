import { useEffect, useState } from "react";
import { usePetSelection } from "../../../context/PetSelectionContext";
import { Container } from "./styles";

export const PageContent: React.FC = () => {
    const { selectedBreed } = usePetSelection();
    const [petInfo, setPetInfo] = useState();

    console.log('sel', selectedBreed);

    useEffect(()=>{
        setPetInfo(selectedBreed);
    }, [selectedBreed])

    return (
        <Container>
            {/* <PetDetails>
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
                </PetDetails> */}
            {petInfo}
        </Container>
    );
};