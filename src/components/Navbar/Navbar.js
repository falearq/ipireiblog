import React,{useState} from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

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
            <NavLink to='/'><h1><img className='ipirei-logo' src={logo} alt='Logo de IPIREI' /></h1></NavLink>
            <div className='menu-icon' onClick={toggleIsOn}> 
                <i className={isOn?'fas fa-times':'fas fa-bars'}></i>
            </div>
            <div> 
                <ul className={isOn?'nav-menu active':'nav-menu'}>
                <NavLink className='nav-links trans' to='/quienes-somos' activeClassName="active"> <li className='nav-links trans'>¿Quiénes somos?</li></NavLink>
                <NavLink className='nav-links trans' to='/mision-vision' activeClassName="active"> <li className='nav-links trans'>Misión y Visión</li></NavLink>
                <NavHashLink  className='nav-links trans' smooth to='/mision-vision#valores'><li className='nav-links trans'>Valores</li></NavHashLink>
                <NavLink className='nav-links trans' to='/agenda-2030' activeClassName="active"> <li className='nav-links trans'>Agenda 2030</li></NavLink>
                <NavLink  className='nav-links trans' to='/contacto' activeClassName="active"> <li className='nav-links trans'>Contacto</li></NavLink>
                </ul>
            </div>

        </NavStyles>
    )
}
