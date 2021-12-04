import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { Container, SideBox, Title } from './states.style'
import instance from '../../services/instance'

let HeaderList = ['Nome', 'Sigla', 'Actions']

let objects = [
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },
    {
        'cod_country': 'Rio de Janeiro',
        'name': 'RJ',
    },


]

const States = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={8} />
            <SideBox>
                <Title>UF</Title>
                <Button style={{ margin: 50 }} label={'Cadastrar'} variant={'primary'} size={'extra-large'} />
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default States