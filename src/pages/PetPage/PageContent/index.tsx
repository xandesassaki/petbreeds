import { useEffect, useState } from "react";
import { usePetSelection } from "../../../context/PetSelectionContext";
import { Container, Section, SectionContent } from "./styles";
import PetNotFound from "../../../assets/pet-not-found.png"

export const PageContent: React.FC = () => {
    const { selectedBreed } = usePetSelection();
    const [petInfo, setPetInfo] = useState();

    console.log('sel', selectedBreed);
    console.log('petInfo', petInfo);

    useEffect(()=>{
        setPetInfo(selectedBreed);
    }, [selectedBreed])

    return (
        <Container>
            <div className="display-breed">
                {/* <img src={selectedBreed?.image?.url ? selectedBreed?.image?.url : "pet-not-found.png"} alt="Pet" className="pet-img"/> */}
                <img src={PetNotFound} alt="PetNotFound" />
            </div>
            <div className="breed-details">
                {/* <DetailsFieldset>
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
                </DetailsFieldset> */}
                <h1 className="breed-name">Teste</h1>
                <div>
                    <Section>Origin Country</Section>
                    <SectionContent>Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino </SectionContent>
                </div>
                <div>
                    <Section>Description</Section>
                    <SectionContent>Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino Ypsuino  </SectionContent>
                </div>
                <div>
                    <Section>Temperament</Section>
                    <SectionContent>YpsuinYpsuino Ypsuino Ypsuino Ypsuino Ypsuino o</SectionContent>
                </div>
                <div>
                    <Section>Life Span</Section>
                    <SectionContent>Ypsuino</SectionContent>
                </div>
            </div>
        </Container>
    );
};