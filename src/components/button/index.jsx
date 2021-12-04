import {ButtonContainer} from './button.style'
const Button = ({ variant, backgroundColor, size, label, style, onClick}) => {

    return (
      <ButtonContainer
        style={style}
        variant={variant}
        size={size}
        onClick={onClick} 
      >
        {label}
      </ButtonContainer>
    );
    
}

Button.default = {
    size: 'large'
}

export { Button}