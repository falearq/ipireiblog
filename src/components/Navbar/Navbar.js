import React,{useState} from 'react'
import styled from 'styled-components'
import { menuItems } from './MenuItems'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

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
                <Link to='quienes-somos'> <li className='nav-links'>¿Quiénes somos?</li></Link>
                <Link to='mision-vision'> <li className='nav-links'>Misión y Visión</li></Link>
                <HashLink smooth to='/mision-vision#valores'><li className='nav-links'>Valores</li></HashLink>
                <Link to='agenda-2030'> <li className='nav-links'>Agenda 2030</li></Link>
                <Link to='contacto'> <li className='nav-links'>Contacto</li></Link>
                </ul>
            </div>

        </NavStyles>
    )
}
