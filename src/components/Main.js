import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import { StyledMain } from './styles/Main.styled'
import Technologies from './Technologies'

function Main() {
  return (
    <StyledMain>
      <Hero />
      <Projects />
      <Technologies />
      <About />
    </StyledMain>
  )
}

export default Main
