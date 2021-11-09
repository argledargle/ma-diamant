import styles from '../styles/Home.module.css'

function scores ({ scores }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://ms-diamant.herokuapp.com/user')
  const scores = await res.json()
  return {
    props: {
      scores
    }
  }
}

export default scores
