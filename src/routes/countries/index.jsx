import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { Container, SideBox, Title } from './countries.style'
import instance from '../../services/instance'

let HeaderList = ['Cód. País', 'Nome', 'Actions']

let objects = [
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },
    {
        'cod_country': 'BR',
        'name': 'Brasil',
    },


]

const Countries = ({ }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        instance.get('/api/Pais/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setCountries(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    }, [])

    return (
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