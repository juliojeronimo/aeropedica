import styled from 'styled-components'

const Container = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '37.5em',
}))

const ContainerActions = styled.div(()=>(({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
})))

const InputContainer = styled.div(()=>({

}))

const Title = styled.text(()=>({
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 20,
    fontFamily: 'sans-serif'

}))

const Row = styled.div(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
}))

const Field = styled.input`
    width: 20em;
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


export { Container,ContainerActions, InputContainer, Title, Field, Row }