import { useState } from 'react'
import { ContainerModal, Box, Row, InputContainer, ContainerActions, Field, Title, Label } from './registerBooking.style'

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

const RegisterBooking = ({ registerData, show }) => {
    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [cod, setcod] = useState('')

    return <ContainerModal show={show}>
        <Box>
            <Title>Cadastro de passageiro</Title>

            <Row>
                <SearchInput placeholder={'Cod. Passageiro'} value={cod} onChange={(event) => { setcod(event.target.value) }}></SearchInput>
            </Row>
            <Row>
                <SearchInput placeholder={'Nome'} value={name} onChange={(event) => { setName(event.target.value) }}></SearchInput>

            </Row>
            <Row>
                <SearchInput placeholder={'Data de nascimento'} value={birthdate} onChange={(event) => { setBirthdate(event.target.value) }}></SearchInput>
            </Row>
            <Row>
                <Button style={{"marginTop": "8px"}} label={"Cadastrar"} variant="primary" size={"extra-large"} onClick="submit()"/>
            </Row>
        </Box>
    </ContainerModal>
}

export { RegisterBooking }