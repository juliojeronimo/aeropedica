import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Container, SideBox, Title } from './passangers.style'
import instance from '../../services/instance'

let HeaderList = ['Id', 'Nome', 'Sexo', 'Data de Nasc.', 'País', 'Estado Civil', 'Responsável', 'Actions']

let objects =
    [
        {
            'cd_psgr': '1',
            'nm_psgr': 's', 
            'ic_sexo_psgr': 's', 
            'dt_nasc_psgr': 's', 
            'cd_pais': 's', 
            'ic_estd_civil': 's', 
            'cd_psgr_resp': 's'
        },
        
    ]

const Passangers = ({ }) => {
    useEffect(()=>{
        instance.post('api/Passageiro/Cadastrar', {
            "cd_psgr": 4,
            "nm_psgr": "string",
            "ic_sexo_psgr": "string",
            "dt_nasc_psgr": "2021-12-04",
            "cd_pais": "string",
            "ic_estd_civil": "string",
            "cd_psgr_resp": 2
        }).then((res)=>{
            console.log(JSON.stringify(res))
        }).catch((e)=>{
            console.log(JSON.stringify(e))
        })
    })

    return (
        <Container>
            <Menu pageIndex={4} />
            <SideBox>
                <Title>Passageiros</Title>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Passangers