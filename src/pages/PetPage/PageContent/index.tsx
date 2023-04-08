import { usePetSelection } from "../../../context/PetSelectionContext";
import { Container, Section, SectionContent } from "./styles";
import PetNotFound from "../../../assets/pet-not-found.png"

export const PageContent: React.FC = () => {
    const { selectedBreed } = usePetSelection();

    return (
        <Container>
            <div className="display-breed">
                <img src={selectedBreed?.image?.url ? selectedBreed?.image?.url : PetNotFound} alt="Pet" className="pet-img"/>
            </div>
            <div className="breed-details">
                <h1 className="breed-name">{selectedBreed?.name}</h1>
                <div>
                    <Section>Origin Country</Section>
                    <SectionContent>{selectedBreed?.origin ? selectedBreed?.origin : 'Unknown'}</SectionContent>
                </div>
                <div>
                    <Section>Description</Section>
                    <SectionContent>{selectedBreed?.description ? selectedBreed?.description : 'There is no description available'}</SectionContent>
                </div>
                <div>
                    <Section>Temperament</Section>
                    <SectionContent>{selectedBreed?.temperament ? selectedBreed?.temperament : 'There is no temperament available'}</SectionContent>
                </div>
                <div>
                    <Section>Life Span</Section>
                    <SectionContent>{selectedBreed?.life_span ? selectedBreed?.life_span : 'Unknown'}</SectionContent>
                </div>
            </div>
        </Container>
    );
};