import styled from 'styled-components'

const Container = styled.div(()=>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh', 
    width: '100vw'

}))

const BookingBox = styled.div(()=>({
    overflow: 'auto'
}))

const SideBox = styled.div(()=>({
    display: 'flex',
    marginTop: 40,
    flexDirection: 'column',
    height: '100vh', 
    width: '100vw',
    alignItems: 'center',
}))

const Title = styled.text(()=>({
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 0,
    fontFamily: 'sans-serif',

}))

export {BookingBox, SideBox, Container, Title}