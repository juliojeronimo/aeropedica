import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import {Button} from '../../components/button'
import { Container, SideBox, Title } from './passangers.style'
import instance from '../../services/instance'

let HeaderList = ['Id', 'Nome', 'Sexo', 'Data de Nasc.', 'País', 'Estado Civil', 'Responsável', 'Actions']

let objects =
    [
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
        },
        {
            'cd_psgr': '1',
            'nm_psgr': 'Alberto Vinicius de Menezes Souza', 
            'ic_sexo_psgr': 'Masc.', 
            'dt_nasc_psgr': '03-12-1992', 
            'cd_pais': 'Brasil', 
            'ic_estd_civil': 'Solteiro', 
            'cd_psgr_resp': 'Alberto Vinicius de Menezes Souza'
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
                <Button style={{margin: 50}} label={'Cadastrar'} variant={'primary'} size={'extra-large'}/>
                <Table header={HeaderList}
                    list={objects}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')} />
            </SideBox>

        </Container>
    );
}

export default Passangers