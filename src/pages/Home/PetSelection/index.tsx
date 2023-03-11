import { Container } from "./styles";
import { SelectionList } from "./SelectionList";
import { SelectionButton } from "./SelectionButton";

interface IPetSelectionProps{
    showGetStarted: boolean;
}

export const PetSelection: React.FC<IPetSelectionProps> = ({ showGetStarted }) => {
    return (
        <Container showGetStarted={showGetStarted}>
            <SelectionButton />
            <SelectionList />
        </Container>
    );
};