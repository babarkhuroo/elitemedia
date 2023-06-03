import { Title, BreakLine } from './styles/GlobalStyles'
import { RiExternalLinkLine } from 'react-icons/ri'
import {
  ProjectContainer,
  ProjectDiv,
  StyledProjects,
} from './styles/Projects.styled'
import { projectsData } from '../data/ProjectsData'

function Projects() {
  return (
    <StyledProjects>
      <BreakLine />
      <Title id='services'>My Solutions</Title>
      <ProjectContainer>
        {projectsData.map((project) => {
          const { id, title, description, image, tags, code, visit } = project
          return (
            <ProjectDiv key={id}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <BreakLine width='true' height='true' margin border />
              <p>{description}</p>
              <p className='stack'>Skills</p>
              <ul>
                {tags.map((tag, idx) => {
                  return <li key={idx}>{tag}</li>
                })}
              </ul>
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
      <div className='calendly-btn btn-services'>
        <a href={'#calendly'}>Book Your Appointment</a>
      </div>
    </StyledProjects>
  )
}

export default Projects
