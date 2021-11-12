import {ButtonContainer} from './button.style'
const Button = ({ variant, backgroundColor, size, label, onClick}) => {

    return (
      <ButtonContainer
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