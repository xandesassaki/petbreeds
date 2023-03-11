import { MouseEventHandler } from "react";
import { StyledButton } from "./styles";

interface IButtonProps {
    type?: 'button' | 'submit',
    style?: IButtonStyleProps,
    children: any
    onClick?: MouseEventHandler<any> | undefined
}

interface IButtonStyleProps{
    btnWidth?: string,
    btnHeigth?: string,
    btnMargin?: string,
}

export const Button: React.FC<IButtonProps>  = ({type, onClick, style, children}) => {
    return (
        <StyledButton type={type} onClick={onClick} btnWidth={style?.btnWidth} btnHeigth={style?.btnHeigth} btnMargin={style?.btnMargin}>
            {children}
        </StyledButton>
    );
};