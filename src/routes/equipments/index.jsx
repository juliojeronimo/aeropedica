import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './equipments.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Equipamento', 'Nome', 'Tipo', 'Motores', 'Propulsor',  'Actions']

let objects = [ 
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
    {
        'cod_equipment': '013',
        'name': 'Equipamento Ultra Hiper Big Master',
        'type': 'Automático',
        'motor': 'Toyota',
        'propelant': 'Simas Turbo Inc.',

    },
]

const Equipments = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={3} />
            <SideBox>
                <Title>Equipamentos</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Equipments