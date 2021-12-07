import { Container, PText } from './bookingDone.style'
import {Button} from '../button'

const bookings = [
    {
        cd_psgr: 0,
        nr_voo: 0,
        dt_saida_voo: "2021-12-07",
        pc_desc_pasg: 0
    },
    {
        cd_psgr: 0,
        nr_voo: 0,
        dt_saida_voo: "2021-12-07",
        pc_desc_pasg: 0
    },
   

]

const BookingDone = ({  }) => {

    return bookings.map((item, index) => { 
        const {cd_psgr, nr_voo, dt_saida_voo, pc_desc_pasg} = item
        return <Container>
            <PText>
                Reserva: {dt_saida_voo}<br />
                Nome do passageiro: {cd_psgr}<br />
                Valor: {nr_voo}<br />
                Desconto: {pc_desc_pasg}<br />
            </PText>
            <Button style={{ marginRight: 10 }} label={'Editar'} variant={'primary'} onClick={()=>console.log('editando')} />
                            <Button  label={'Deletar'} variant={'secondary'} onClick={()=>console.log('deletando')} />

        </Container>
    })


}

BookingDone.default = {
    size: 'large'
}

export { BookingDone }