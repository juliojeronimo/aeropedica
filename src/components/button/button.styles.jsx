import styled from 'styled-components'

// const ButtonContainer = styled.button`
//     background-color: ${props => props.variant == "primary" ? '#00f' : '#f00'}
// `

const ButtonContainer = styled.button((props)=>({
    backgroundColor: props.variant == "primary" ? '#03045E' : '#f00',
    border: 0,
    borderRadius: '0.3em',
    width: 100,
    height: 30,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',


}))


export {ButtonContainer}