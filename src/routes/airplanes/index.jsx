import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './airplanes.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Aeronave', 'Cód. Equipamento', 'Cód. Companhia',  'Actions']

let objects = [
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Rio de Janeiro',
        'cod_companie': 'Brasil',
    },
]

const Airports = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={1} />
            <SideBox>
                <Title>Aeronaves</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Airports