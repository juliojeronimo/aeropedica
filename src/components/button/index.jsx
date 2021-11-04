import {ButtonContainer} from './button.style'
const Button = ({ variant, backgroundColor, size, label, ...props }) => {

    return (
      <ButtonContainer
        variant={variant}
        size={size}
      >
        {label}
      </ButtonContainer>
    );
    
}

Button.default = {
    size: 'large'
}

export { Button}