import styled from 'styled-components'


const ButtonContainer = styled.button((props)=>({
    backgroundColor: props.variant === "primary" ? '#03045E' : props.variant === 'secondary' ? '#f00' : props.variant === 'ghost' ? '#fff' : '',
    border: 0,
    borderRadius: '0.3em',
    width: props.size === 'extra-large' ? 140 : props.size === 'large' ? 100 : 50,
    height: props.size === 'extra-large' ? 40 : props.size === 'large' ? 30 : 20,
    fontWeight: props.variant === 'ghost' ? '' :  'bold',
    fontSize: props.size === 'extra-large' ? 16 : props.size === 'large' ? 16 : 12,
    color: props.variant === 'ghost' ? '#000' :  '#fff' ,
}))


export {ButtonContainer}