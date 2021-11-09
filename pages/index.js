import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const Anchor = styled.a`
  color: #0070f3;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

export default function Home () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Diamant</h1>

        <p className={styles.description}>A game of press-your-luck</p>

        <Link href='/diamant' passHref>
          <Anchor>Click here to play</Anchor>
        </Link>
        <br />
        <Link href='/scores' passHref>
          <Anchor>Click here to see the high scores</Anchor>
        </Link>
      </main>
    </div>
  )
}
