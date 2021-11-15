import styled from 'styled-components'


const ButtonContainer = styled.button((props)=>({
    backgroundColor: props.variant === "primary" ? '#03045E' : '#f00',
    border: 0,
    borderRadius: '0.3em',
    width: props.size === 'extra-large' ? 140 : props.size === 'large' ? 100 : 50,
    height: props.size === 'extra-large' ? 40 : props.size === 'large' ? 30 : 20,
    fontWeight: 'bold',
    fontSize: props.size === 'extra-large' ? 16 : props.size === 'large' ? 16 : 12,
    color: '#fff',


}))


export {ButtonContainer}