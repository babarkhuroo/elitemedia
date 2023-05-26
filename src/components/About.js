import { AboutStyled } from './styles/About.styled'
import { BreakLine, Title } from './styles/GlobalStyles'
import {
  ProjectContainer,
  ProjectDiv,
  StyledProjects,
} from './styles/About.styled'
import { AboutData } from '../data/AboutData'

function About() {
  return (
    <StyledProjects>
      <BreakLine />
      <Title id='pricing'>Packaging & Pricing</Title>
      <ProjectContainer>
        {AboutData.map((project) => {
          const { id, heading, title, description, image, tags, code, price } =
            project
          return (
            <ProjectDiv key={id}>
              {/* <img src={image} alt={title} /> */}
              <h2>{heading}</h2>
              {/* <h4>SMM</h4> */}
              <h3>{title}</h3>
              <BreakLine width='true' height='true' margin border />
              <p>{description}</p>
              {/* <p className='stack'>Skills</p> */}
              <ul>
                {tags.map((tag, idx) => {
                  return <li key={idx}>{tag}</li>
                })}
              </ul>
              <div className='light-box'>
                <p className='p1'>Starting at</p>
                <p className='p2'>
                  ${price}
                  <span>/mo</span>
                </p>
                <p className='p3'>
                  The pricing for Package 4 will be determined based on the
                  services and platforms you select, ensuring that you get a
                  fair and competitive price for the customized solution.
                </p>
                <div>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=971509211030&text=Hi Khalifa, I'm interested in Package ${id}`}>
                    Let's Talk
                  </a>
                </div>
              </div>
              {/* <div className='links'>
                <a href={code} target='_blank' rel='noopener noreferrer'>
                  Source Code <RiExternalLinkLine />
                </a>
                <a href={visit} target='_blank' rel='noopener noreferrer'>
                  Live Site <RiExternalLinkLine />
                </a>
              </div> */}
            </ProjectDiv>
          )
        })}
      </ProjectContainer>
    </StyledProjects>
  )
}

export default About
