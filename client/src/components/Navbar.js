import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import "../style/Navbar.css"

function Navbar() {

const [nav, setNav] = useState(false)
const [slide, setSlide] = useState(false)

const handleNav = () => {
    setSlide(!slide)
    setNav(!nav)
}

    return (
        <div className='navbar'>
            <div className='container'>
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>iFitness.</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='/'><Link onClick={handleNav} activeClass='active' to='/' spy={true} smooth={true} duration={500}>Home</Link></a></li>
                    <li><a href='/create'><Link onClick={handleNav} activeClass='active' to='/create' spy={true} smooth={true} duration={500}>Exercise Log</Link></a></li>
                </ul>
                <div className='hamburger' onClick={handleNav}>
                    {nav ? (<FaTimes size={20} style={{color: 'ivory'}}/>) : (<FaBars size={20} style={{color: '#f00f47'}}/>)}
                </div>                
            </div>
        </div>
    )
}

export default Navbar