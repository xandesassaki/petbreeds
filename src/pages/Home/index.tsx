import { useState } from "react";
import { GetStarted } from "./GetStarted";
import { HomeBanner } from "./HomeBanner";
import { PetSelection } from "./PetSelection";
import { Container } from "./styles";

export const Home: React.FC = () => {
    const [showGetStarted, setShowGetStarted] = useState<boolean>(true);

    return (
        <Container>
            <GetStarted showGetStarted={showGetStarted} setShowGetStarted={setShowGetStarted}/>
            <HomeBanner showGetStarted={showGetStarted} />
            <PetSelection showGetStarted={showGetStarted}/>
        </Container>
    );
};