import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './airports.style'
import instance from '../../services/instance'

//Arquivo que monta a tela de aeroportos

//A HeaderList é o titulo das colunas das tabelas 
let HeaderList = ['Cód. Aeroporto', 'Cidade', 'País', 'UF', 'Actions']

const Airports = ({ }) => {
    
    //variavel (estado) que guarda o array de aeroportos já cadastrados no sistema
    const [airports, setAirports] = useState([])


    useEffect(() => {
        instance.get('/api/Aeroporto/Listar').then((res) => { //chamada para a API para listar todos os aeroportos
            console.log(JSON.stringify(res))
            setAirports(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

    return ( //Monta a tabelas com componentes que estão na pasta "components" 
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