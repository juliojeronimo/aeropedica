import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './equipments.style'
import instance from '../../services/instance'

//A HeaderList é o titulo das colunas das tabelas 
let HeaderList = ['Cód. Equipamento', 'Nome', 'Tipo', 'Motores', 'Propulsor',  'Actions']

const Equipments = ({ }) => {

    const [equipaments, setEquipaments] = useState([]) //variavel (estado) que guarda o array de paises já cadastrados no sistema

    useEffect(() => {
        instance.get('./api/Equipamento/Listar').then((res) => { //Faz a chamada para a API para listar todos os Equipamentos
            console.log(JSON.stringify(res))
            setEquipaments(res.data) //Salva na variavel o array com os equipamentos
        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    })

    return ( //Monta as tabelas com componentes que estão na pasta "components" 
        <Container>
            <Menu pageIndex={3} />
            <SideBox>
                <Title>Equipamentos</Title>
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={equipaments}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Equipments