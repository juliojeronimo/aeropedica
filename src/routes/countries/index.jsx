import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { Container, SideBox, Title } from './countries.style'
import instance from '../../services/instance'

//A HeaderList é o titulo das colunas das tabelas 
let HeaderList = ['Cód. País', 'Nome', 'Actions']

const Countries = ({ }) => {
    const [countries, setCountries] = useState([]) //variavel (estado) que guarda o array de paises já cadastrados no sistema

    useEffect(() => {
        instance.get('/api/Pais/Listar').then((res) => { //Faz a chamada para a API para listar todos os paises
            console.log(JSON.stringify(res))
            setCountries(res.data) //Salva na variavel o array com os paises

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    }, [])

    return ( //Monta a tabelas com componentes que estão na pasta "components" 
        <Container>
            <Menu pageIndex={9} />
            <SideBox>
                <Title>País</Title>
                <Button style={{ margin: 50 }} label={'Cadastrar'} variant={'primary'} size={'extra-large'} />
                <Table header={HeaderList}
                    list={countries}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Countries