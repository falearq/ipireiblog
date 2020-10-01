import React,{useState} from 'react'
import styled from 'styled-components'
import { menuItems } from './MenuItems'
import logo from '../../images/logo.png'

const NavStyles = styled.nav`

}
` 
export default function Navbar() {

    const useToggle =(initialValue = false) => {
        const [value, setValue] = useState(initialValue);
        const toggle = React.useCallback(() => {
          setValue(v => !v);
        }, []);
        return [value, toggle];
    }
    const [isOn, toggleIsOn] = useToggle();
   
    return (
        <NavStyles className='NavbarItems'>
            <h1><img className='ipirei-logo' src={logo} alt='Logo de IPIREI' /></h1>
            <div className='menu-icon' onClick={toggleIsOn}> 
                <i className={isOn?'fas fa-times':'fas fa-bars'}></i>
            </div>
            <div> 
                <ul className={isOn?'nav-menu active':'nav-menu'}>
                {menuItems.map((item, index) =>{
                    return (
                    <li key={index} className={item.cName}>{item.title}</li>
                    )
                })}
                </ul>
            </div>

        </NavStyles>
    )
}
