import { useState } from 'react'
import { ContainerModal, Box, Row, InputContainer, ContainerActions, Field, Title, Label } from './bookingSearchModal.style'

import { Button } from '../button'

const SearchInput = ({ label, type, placeholder, value, onChange }) => {
    return (
        <InputContainer>
            {label ? <Label>{label}</Label>
                : null}
            <Field type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </InputContainer>
    )
}

const BookingSearchModal = ({ show }) => {
    const [search, setSearch] = useState('')

    return <ContainerModal show={show}>
        <Box>
            <Title>Cadastro de passageiro</Title>

            <Row>
                <SearchInput placeholder={'Buscar'} value={search} onChange={(event) => { setSearch(event.target.value) }}></SearchInput>
            </Row>
            <Row>
                <Button style={{"marginTop": "8px"}} label={"Reservar >"} variant="primary" size={"extra-large"} onClick="submit()"/>
            </Row>
        </Box>
    </ContainerModal>
}

export { BookingSearchModal }