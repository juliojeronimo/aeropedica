import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './flights.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. voo', 'Data de Saída', 'Cód. Aeronave', 'Rota',  'Actions']

const FlightRoutes = ({ }) => {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        instance.get('/api/Voo/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setFlights(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

    return (
        <Container>
            <Menu pageIndex={7} />
            <SideBox>
                <Title>Voos</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={flights}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default FlightRoutes