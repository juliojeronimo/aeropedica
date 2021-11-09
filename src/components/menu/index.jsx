import { LogoContainer, MenuContainer, MenuItem } from './menu.style';
import logo from '../../assets/images/logo-default.png'

let menuList = ['Aeroportos', 'Aeronaves', 'Companhias', 'Equipamentos', 'Passageiros', 'Reservas', 'Rotas de voo', 'Voos', 'UF', 'País']

const Menu = ({ menuItems, pageIndex}) => {

    return (
      <MenuContainer>
          <LogoContainer><img style={{maxHeight: 100, width: 80}} src={logo}/></LogoContainer>
          
          {menuList.map((item,index)=>{
              return <MenuItem onClick={()=> console.log('crica ai')} selected={index===pageIndex}>{item}</MenuItem>
          })} 
        

      </MenuContainer>
    );
    
}

export { Menu}