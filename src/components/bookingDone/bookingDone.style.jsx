import styled from 'styled-components'


const Container = styled.div((props) => ({
    backgroundColor: '#CAF0F8',
    padding: 5,
    margin: 5,
    border: 'solid',
    borderWidth: 0,
    borderRadius: 5,

}))

const PText = styled.p(()=>({
    fontFamily: 'sans-serif',
    fontSize: 11,
    fontWeight: 'bold',
    // lineHeight: 0.8
}))


export { Container, PText }