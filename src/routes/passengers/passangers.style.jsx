import styled from 'styled-components'

const Container = styled.div(()=>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh', 
    width: '100vw'

}))

const SideBox = styled.div(()=>({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', 
    width: '100vw',
    alignItems: 'center',
}))

const Title = styled.text(()=>({
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    paddingTop: 10,
    paddingBottom: 20,
    fontFamily: 'sans-serif',

}))

export {SideBox, Container, Title}