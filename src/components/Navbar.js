import { StyledNavbar, NavLink, Link } from './styles/Navbar.styled'
import { BsHouseFill } from 'react-icons/bs'
import { navLinks, socialLinks } from '../data/NavData'
import logo from '../assets/New logo.png'

function Navbar() {
  return (
    <StyledNavbar>
      <div className='logo-container'>
        <a href='/' className='logo'>
          {/* <BsHouseFill /> */}
          <img src={logo} alt='Logo' />
          {/* <span>Moujtaba</span> */}
        </a>
      </div>
      <ul className='nav-links'>
        {navLinks.map(({ text, link, id }) => {
          return (
            <li key={id}>
              <NavLink href={`#${link}`}>{text}</NavLink>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {socialLinks.map(({ url, icon, id }) => {
          return (
            <li key={id}>
              <Link href={url}>{icon}</Link>
            </li>
          )
        })}
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
