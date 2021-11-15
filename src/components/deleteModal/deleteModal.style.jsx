import styled from 'styled-components'

const ContainerModal = styled.div((props)=>({
    display: props.show ? 'block': 'none', 
    position: 'fixed', 
    zIndex: 1, 
    left: 0,
    top: 0,
    width: '100%', 
    height: '100%', 
    overflow: 'auto', 
    backgroundColor: 'rgb(0,0,0)', 
    backgroundColor: 'rgba(0,0,0,0.4)', 
}))


const Box = styled.div(()=>({
    backgroundColor: '#fefefe',
    borderRadius: '0.5em',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '20em',
}))

const Description = styled.p(()=>({
    fontFamily: 'sans-serif',
    fontSize: 16,
    textAlign: 'center'

}))

const ContainerActions = styled.div(()=>({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center'
}))

export { ContainerModal, Box, Description, ContainerActions}