import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './airports.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Aeroporto', 'Cidade', 'País', 'UF', 'Actions']

let objects = [
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
    {
        'cod_airport': '1',
        'city': 'Rio de Janeiro',
        'country': 'Brasil',
        'state': 'Rio de Janeiro',
    },
]

const Airports = ({ }) => {

    const [airports, setAirports] = useState([])

    useEffect(() => {
        instance.get('/api/Aeroporto/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setAirports(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

    return (
        <Container>
            <Menu pageIndex={0} />
            <SideBox>
                <Title>Aeroportos</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={airports}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Airports