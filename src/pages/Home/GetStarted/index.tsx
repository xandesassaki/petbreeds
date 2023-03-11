import { Container } from "./styles";
import LogoBanner from "../../../assets/logo-banner.png"
import { Button } from "../../../components/Button";
import { Dispatch, SetStateAction, useCallback } from "react";

interface IGetStartedProps{
    showGetStarted: boolean;
    setShowGetStarted: Dispatch<SetStateAction<boolean>>;
}

export const GetStarted: React.FC<IGetStartedProps> = ({ showGetStarted, setShowGetStarted }) => {
    const handleHideContainer = useCallback(() => {
        setShowGetStarted(false);
    }, [setShowGetStarted])

    return (
        <Container showGetStarted={showGetStarted}>
            <img src={LogoBanner} alt="logo" />
            <span className="get-started-message">
                Here you can search for dogs or cats by their breeds
            </span>
            <Button
                type="submit"
                style={{btnWidth: '100%'}}
                onClick={handleHideContainer}
            >
                <span>Let's Start!</span>
            </Button>
        </Container>
    );
};