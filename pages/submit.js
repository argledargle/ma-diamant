import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'

const Input = styled.input`
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

function Submit ({ points }) {
  const [name, setName] = useState('')
  const [scores, setScores] = useState(null)
  const router = useRouter()

  const handleClick = async e => {
    e.preventDefault()
    setScores(await submitScore({ name: name, score: parseInt(points) }))
  }
  if (scores !== null) {
    router.push('/scores')
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          You are submitting a score for {points} point{points > 1 ? 's' : ''}!
        </h1>
        <br />
        <form
          onSubmit={() => submitScore({ name: name, score: parseInt(points) })}
        >
          <label>
            Name:
            <input
              type='text'
              name='name'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </label>
          <br />
          <Input type='submit' value='Submit' onClick={e => handleClick(e)} />
        </form>
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {
  return {
    props: {
      points: context.query.data
    }
  }
}

async function submitScore (body) {
  const res = await fetch('https://ms-diamant.herokuapp.com/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const scores = await res.json()
  return scores
}

export default Submit
