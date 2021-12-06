import { useEffect } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { BookingSearch } from '../../components/bookingSearch'
import { Booking } from '../../components/booking'
import { Container, BookingBox, SideBox, Title } from './bookings.style'
import instance from '../../services/instance'

let bookings = [
    {
        source: 'Rio de Janeiro', target: 'Fortaleza', airportSource: 'Rio de Janeiro',
        airportTarget: 'Sobral', time: '08:15', price: '234', discount: '0'
    },
    {
        source: 'São Paulo', target: 'Salvador', airportSource: 'Congonhas',
        airportTarget: 'Aeroporto Internacional de Salvador', time: '08:15', price: '234', discount: '14'
    },
    {
        source: 'Minas Gerais', target: 'Campinas', airportSource: 'Rio de Janeiro',
        airportTarget: 'Viracopos', time: '08:15', price: '234', discount: '32'
    },
]

const Bookings = ({ }) => {

    return (
        <Container>
            <Menu pageIndex={5} />
            <SideBox>
                <BookingSearch />
                <BookingBox>
                    <Booking bookings={bookings} />
                </BookingBox>
            </SideBox>

        </Container>
    );
}

export default Bookings