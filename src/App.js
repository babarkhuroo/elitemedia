import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/Theme'
import { RootContainer } from './components/styles/RootContainer.styled'
import { GlobalStyles } from './components/styles/Global'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <GlobalStyles />
        <Navbar />
        <Main />
        <Footer />
      </RootContainer>
    </ThemeProvider>
  )
}

export default App
