import styled from 'styled-components'

const MenuContainer = styled.div((props)=>({
    backgroundColor: '#03045E',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center'
}))

const LogoContainer = styled.div((props)=>({
    margin: '0 auto',
    width: 80,
    paddingTop: '20px',
    marginBottom: 50
}))

const MenuItem = styled.div((props)=> ({
    backgroundColor: props.selected ? '#02034b' : '#03045E' ,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 18,
    // marginTop: 10,
    padding: 10,
    paddingLeft: 20,

    // paddingLeft: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))




export {MenuContainer, LogoContainer, MenuItem}