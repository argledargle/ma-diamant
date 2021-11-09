import router, { useRouter } from 'next/router'
import styled from 'styled-components'
import Button from '../button'

const StyledHeader = styled.header`
padding: 1rem 0 0 1rem;
`

export default function Header () {
  const { asPath } = useRouter()

  return (
    <StyledHeader>
      {asPath === '/' ? null : (
        <Button onClick={() => router.back()}>{'< Back'}</Button>
      )}
    </StyledHeader>
  )
}
