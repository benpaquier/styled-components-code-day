import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'

import Title from './components/Title'
import Button from './components/Button'

const Container = styled.div`
  width: 968px;
  margin: 0 auto;
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          Hello
        </Title>

        <Button background="salmon">
          Salmon
        </Button>

        <Button background="teal">
          Teal
        </Button>
      </Container>
    </>
  )
}

export default App