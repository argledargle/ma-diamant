import { set } from 'lodash'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function Scores () {
  const [state, setState] = useState('loading')
  const [scores, setScores] = useState([])

  useEffect(async () => {
    try {
      async function getScores () {
        const res = await fetch('https://ms-diamant.herokuapp.com/user')
        const scores = await res.json()
        return scores
      }
      const scores = await getScores()
      setScores(scores)
      setState('success')
    } catch (err) {
      console.error('error:', error)
    }
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {state === 'loading' ? (
          <p>Loading</p>
        ) : (
          <>
            <h1>Top {scores.length} Scores</h1>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
                {scores.map((score, i) => {
                  return (
                    <tr key={i}>
                      <td className={styles.td}>{score.name}</td>
                      <td className={styles.td}>{score.score}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  )
}


export default Scores
