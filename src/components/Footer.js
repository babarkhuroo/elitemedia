import resume from '../assets/my_resume.pdf'
import { socialLinks } from '../data/NavData'
import { StyledFooter } from './styles/Footer.styled'

function Footer() {
  return (
    <StyledFooter>
      <section>
        <h4>Phone/WhatsApp</h4>
        <a href='tel:+971509211030'>+971 50 921 1030</a>
        <h4>Email</h4>
        <a href='mailto:khalifa@mjelitemedia.com'>khalifa@mjelitemedia.com</a>
        <h4>Address</h4>
        <a href='https://goo.gl/maps/12X1qW7wXqefyq9v9'>
          Al Majaz 1, Sharjah, United Arab Emirates
        </a>
        <div className='btn-container'>
          {/* <button onClick={() => (window.location = resume)}>
            View Resume
          </button> */}
          <ul className='social-links'>
            {socialLinks.map(({ url, icon, id }) => {
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </StyledFooter>
  )
}

export default Footer
