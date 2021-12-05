import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './flights.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. voo', 'Data de Saída', 'Cód. Aeronave', 'Rota',  'Actions']

let objects = [
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
    {
        'cod_airport': '1',
        'cod_equip': '01/12/2021',
        'cod_companie': '023',
        'cod_voucher': '2'
    },
]

const FlightRoutes = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={7} />
            <SideBox>
                <Title>Rotas de voo</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default FlightRoutes