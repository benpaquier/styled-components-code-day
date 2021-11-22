import styled from 'styled-components'

const DefaultButton = styled.button`
  background: ${props => props.background};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 100px;
`

const Button = props => {
  console.log(props)

  const handleClick = () => {
    console.log("click")
  }
  
  return (
    <DefaultButton onClick={handleClick} background={props.background}>
      {props.children}
    </DefaultButton>
  )
}

export default Button