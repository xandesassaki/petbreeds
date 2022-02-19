import { Header } from "./Header";
import { Container } from "./styles";

interface IWrapperProps{
    children: React.ReactNode;
}

export const Wrapper: React.FC<IWrapperProps> = ({children}: IWrapperProps) => {
    return (
        <Container>
            <Header />
            <div>{children}</div>
        </Container>
    );
};