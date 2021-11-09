import styled from 'styled-components'

const ButtonComponent = styled.button`
  background-color: white;
  border: none;
  color: #0070f3;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default function Button ({ children, onClick }) {
  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
}
