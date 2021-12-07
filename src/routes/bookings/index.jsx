import { useEffect, useState } from 'react'
import { Menu } from '../../components/menu'
import { Table } from '../../components/table'
import { Button } from '../../components/button'
import { BookingSearch } from '../../components/bookingSearch'
import { Booking } from '../../components/booking'
import { Container, BookingBox, SideBox, Title } from './bookings.style'
import instance from '../../services/instance'


const Bookings = ({ }) => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        instance.get('/api/Aeroporto/Listar').then((res) => {
            console.log(JSON.stringify(res))
            setBookings(res.data)

        }).catch((e) => {
            console.log(JSON.stringify(e))
        })
    },[])

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