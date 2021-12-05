import { LogoContainer, MenuContainer, MenuItem } from './menu.style';
import logo from '../../assets/images/logo-default.png'
import { useState } from 'react';
import { Link } from "react-router-dom";


let menuList = [
    {name: 'Aeroportos', route: 'airports'}, 
    {name: 'Aeronaves', route: 'airplanes'}, 
    {name: 'Companhias', route: 'companies'}, 
    {name: 'Equipamentos', route: 'equipments'}, 
    {name: 'Passageiros', route: 'passengers'}, 
    {name: 'Reservas', route: 'bookings'}, 
    {name: 'Rotas de voo', route: 'flight-routes'}, 
    {name: 'Voos', route: 'flights'}, 
    {name: 'UF', route: 'states'}, 
    {name: 'País', route: 'countries'}, 


]

const Menu = ({ menuItems, pageIndex }) => {
    let [menuIndex, setMenuIndex] = useState(pageIndex)
    return (
        <MenuContainer>
            <LogoContainer><img style={{ maxHeight: 100, width: 80 }} src={logo} /></LogoContainer>

            {menuList.map((item, index) => {
                return <Link style={{textDecoration: 'none'}} to={`/${item.route}`}>
                    <MenuItem onClick={() => {
                        setMenuIndex(index)
                    }} selected={index === menuIndex}>{item.name}</MenuItem>
                </Link>

            })}


        </MenuContainer>
    );

}

export { Menu }