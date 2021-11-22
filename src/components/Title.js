import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 40px;
  color: blue;
`

const Title = props => {
  return (
    <H1>
      {props.children}
    </H1>
  )
}

export default Title