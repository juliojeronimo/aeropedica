import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './companies.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Companhia', 'Nome', 'Cód. do País',  'Actions']

let objects = [
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
    {
        'cod_airport': '1',
        'cod_equip': 'Aerotrem',
        'cod_companie': '014',
    },
]

const Companies = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={2} />
            <SideBox>
                <Title>Companhias aéreas</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Companies