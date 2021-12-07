import { useState } from 'react'
import { ContainerModal, Box, Row, InputContainer, ContainerActions, Field, Title, Label } from './registerPassenger.style'

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

const RegisterPassenger = ({ show, onClose }) => {
    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [responsibleCode, setResponsibleCode] = useState('')
    const [country, setCountry] = useState('')
    const [sex, setSex] = useState('')

    return <ContainerModal show={show}>
        <Box>
            <Title>Cadastro de passageiro</Title>
            <Row>
                <SearchInput placeholder={'Nome'} value={name} onChange={(event) => { setName(event.target.value) }}></SearchInput>

                <SearchInput label={'M'} type={'radio'} name={'gender'} value={'M'} onChange={(event) => { setSex(event.target.value) }}></SearchInput>
                <SearchInput label={'F'} type={'radio'} name={'gender'} value={'F'} onChange={(event) => { setSex(event.target.value) }}></SearchInput>


            </Row>
            <Row>
                <SearchInput placeholder={'Data de nascimento'} value={birthdate} onChange={(event) => { setBirthdate(event.target.value) }}></SearchInput>
                <SearchInput placeholder={'Cod. responsável'} value={responsibleCode} onChange={(event) => { setResponsibleCode(event.target.value) }}></SearchInput>
            </Row>
            <Row>
                <SearchInput placeholder={'País'} value={country} onChange={(event) => { setCountry(event.target.value) }}></SearchInput>\
            </Row>
            <Row>
                <Button style={{"marginTop": "8px"}} label={"Cadastrar"} variant="primary" size={"extra-large"} onClick="submit()"/>
            </Row>
        </Box>
    </ContainerModal>
}

export { RegisterPassenger }