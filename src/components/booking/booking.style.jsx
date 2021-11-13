import styled from 'styled-components'

const Container = styled.div(()=>({
    width: '40em',
    height: '5em',
    margin: '1em',
    borderRadius: '0.8em',
    padding: '1.5em',
    backgroundColor: '#ddf5fa',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
}))

const Text = styled.div((props)=>({
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    padding: 5,
    fontSize: props.size === 'large' ? 18 : props.size === 'medium' ? 16 : 12,
}))

const Column = styled.div(()=> ({
    display: 'flex',
    padding: 2,
    justifyContent: 'center',
    flexDirection: 'column',

}))

const LineVertical = styled.div(()=>({
    borderStyle: 'solid',
    borderRightWidth: '0em',
    borderTopWidth: '0em',
    borderBottomWidth: '0em',
    borderLeftWidth: 0.05,
}))

export {Container, Column, Text, LineVertical }