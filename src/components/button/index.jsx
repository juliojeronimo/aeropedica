import {ButtonContainer} from './button.styles'
const Button = ({ variant, backgroundColor, size, label, ...props }) => {

    return (
      <ButtonContainer
        variant={variant}
      >
        {label}
      </ButtonContainer>
    );
    
}

Button.default = {
    backgroundColor: '#ff0'
}

export { Button}