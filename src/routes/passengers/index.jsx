import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { RegisterPassenger } from '../../components/registerPassenger'
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

const registerPassenger = ({ name, birthdate, responsibleCode, country, sex, maritalStatus, onSucess }) => {
    instance.post('/api/Passageiro/Cadastrar', {
        "cd_psgr": 0,
        "nm_psgr": name,
        "ic_sexo_psgr": sex,
        "dt_nasc_psgr": birthdate,
        "cd_pais": country,
        "ic_estd_civil": maritalStatus,
        "cd_psgr_resp": responsibleCode / 1.0
    }, {
        'Content-Type': 'application/json',
    }).then((res) => {
        console.log(JSON.stringify(res))
        onSucess()

    }).catch((e) => {
        console.log(JSON.stringify(e))
    })
}

const Passangers = ({ }) => {
    const [passengers, setPassengers] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        instance.get('/api/Passageiro/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setPassengers(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

    return (

        <Container>

            <Menu pageIndex={4} />
            <RegisterPassenger
                show={showModal}
                onClickOut={()=> setShowModal(false)}
                register={({ name, birthdate, responsibleCode, country, sex, maritalStatus }) => registerPassenger({ name, birthdate, responsibleCode, country, sex, maritalStatus, onSucess: ()=> setShowModal(false) })} />
            <SideBox>
                <Title>Passageiros</Title>
                <Button style={{ margin: 50 }}
                    onClick={() => setShowModal(true)}
                    label={'Cadastrar'}
                    variant={'primary'}
                    size={'extra-large'} />
                <Table header={HeaderList}
                    list={passengers}
                    updateItem={() => console.log('editando')}
                    deleteItem={() => console.log('deletando')}

                />
            </SideBox>

        </Container>
    );
}

export default Passangers