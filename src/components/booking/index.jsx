import { Container, Column, Text, LineVertical, } from './booking.style'
import { Button } from '../button'

const Booking = ({ source, target, airportSource,
    airportTarget, time, price, discount }) => {
    return <Container>
        <Column style={{width: '20em'}}>
            <Text size={'medium'}>
                {`Origem: ${source} `}
                <br />
                {`Destino: ${target}`}

            </Text>

            <Text>
                {`Aeroporto origem: ${airportSource}`}
                 <br />
                {`Aeroporto origem: ${airportTarget}`}
        </Text>
        </Column>
        <LineVertical />
        <Column >
            <Text size={'medium'}>
                {`Horario: ${time}`}
            </Text>

            <Text size={'large'}>
                {`Preço: R$ ${price}`}
                <br />
                {`Desconto: ${discount}%`}
        </Text>
        </Column>

        <Column>
            <Button label={'Reservar >'} variant={'primary'} size={'extra-large'} />
        </Column>
    </Container>
}

export { Booking }