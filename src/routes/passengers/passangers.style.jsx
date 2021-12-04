import styled from 'styled-components'

const Container = styled.div(()=>({
    display: 'flex',
    flexDirection: 'row'
}))

const Title = styled.p(()=>({
    fontSize: 14
}))

export {Container, Title}