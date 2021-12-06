import { useState } from 'react'
import { Button } from '../button'
import { Container, ContainerActions, InputContainer, Title, Field, Row } from './bookingSearch.style'

const SearchInput = ({ type, placeholder, value, onChange }) => {
    return (
        <InputContainer>
            <Field type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </InputContainer>
    )
}

const BookingSearch = () => {
    const [origin, setOrigin] = useState('')
    const [target, setTarget] = useState('')
    const [date, setDate] = useState('')

    return (<Container>
        <Title>Reservas</Title>
            <Row>
                <SearchInput placeholder={'Origem'} value={origin} onChange={(event) => { setOrigin(event.target.value) }} />
                <SearchInput placeholder={'Destino'} value={target} onChange={(event) => { setTarget(event.target.value) }} />
            </Row>
            <Row>
                <SearchInput placeholder={'Data'} value={date} onChange={(event) => { setDate(event.target.value) }} />

            </Row>
            <ContainerActions>
                <Button style={{marginRight: 10}} label={'Buscar voo'} size={'extra-large'} variant={'primary'} onClick={()=>onSubmit({origin, target, date})}/>
                <Button label={'Buscar reserva'} size={'extra-large'} variant={'primary'} />
            </ContainerActions>
    </Container>)
}

const onSubmit = (item) => {
    console.log(JSON.stringify(item))
}

export { BookingSearch }