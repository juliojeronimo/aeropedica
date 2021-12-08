import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './flights.style'
import instance from '../../services/instance'

//A HeaderList é o titulo das colunas das tabelas 
let HeaderList = ['Cód. voo', 'Data de Saída', 'Cód. Aeronave', 'Rota',  'Actions']

const FlightRoutes = ({ }) => {

    const [flights, setFlights] = useState([])//variavel (estado) que guarda o array de voos já cadastrados no sistema

    useEffect(() => {
        instance.get('/api/Voo/Listar').then((res) => {//Faz a chamada para a API para listar todos os voos
            console.log(JSON.stringify(res))
            setFlights(res.data)//Salva na variavel o array com os voos

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

    return ( //Monta a tabelas com componentes que estão na pasta "components"
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