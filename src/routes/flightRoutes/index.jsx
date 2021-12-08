import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './flightRoutes.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Origem', 'Cód. Destino', 'Num. Rota', 'Voucher',  'Actions']

const FlightRoutes = ({ }) => {

    const [routes, setRoutes] = useState([]) //variavel (estado) que guarda o array de paises já cadastrados no sistema

    useEffect(()=> {
        instance.get('./api/Rota/Listar').then((res) => { //Faz a chamada para a API para listar todos as rotas de voo
            console.log(JSON.stringify(res))
            setRoutes(res.data) //Salva na variavel o array com os paises
        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    })

    return ( //Monta a tabelas com componentes que estão na pasta "components"
        <Container>
            <Menu pageIndex={6} />
            <SideBox>
                <Title>Rotas de voo</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={routes}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default FlightRoutes