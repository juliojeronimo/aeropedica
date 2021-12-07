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
    padding: '10px',
    border: '1px solid #888',
    display: 'table'
    // width: '20em',
}))

const InputContainer = styled.div(()=>({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
}))

const Label = styled.p(()=>({
    fontSize: 11,
    fontFamily: 'sans-serif',
    textAlign: 'center'
}))

const Row = styled.div(()=>({
    display: 'flex',
    flexDirection: 'row', 
    AlignItens: 'center',
    justifyContent: 'center'
}))

const Title = styled.p(()=>({
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'sans-serif',
    textAlign: 'center'

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

const Field = styled.input`
    // width: 20em;
    border: none;
    outline: none;
    padding: 0.5em;
    placeholder: red; 
    padding-left: 0.35em;
    padding-right: 0.35em;
    border-radius: 0.3em;
    margin: 0.8em;
    background-color: #ECF6F8;
    
    &::placeholder  {
        color: #BDC5C6;
      }
`

export { ContainerModal, Box, Row, InputContainer, Description, ContainerActions, Field, Title, Label}