import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './equipments.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. Equipamento', 'Nome', 'Tipo', 'Motores', 'Propulsor',  'Actions']

const Equipments = ({ }) => {

    const [equipaments, setEquipaments] = useState([])

    useEffect(() => {
        instance.get('./api/Equipamento/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setEquipaments(res.data)
        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    })

    return (
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