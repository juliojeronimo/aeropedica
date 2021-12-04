import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './flightRoutes.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Origem', 'Cód. Destino', 'Num. Rota', 'Voucher',  'Actions']

let objects = [
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
    {
        'cod_airport': '1',
        'cod_equip': '0378',
        'cod_companie': 'Aero/LATAM',
        'cod_voucher': 'EA2F552'
    },
]

const FlightRoutes = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={6} />
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