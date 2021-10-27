import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Diamant</h1>

        <p className={styles.description}>
          Get started by clicking on the card below
        </p>

        {/* TODO: Put in the card logic here */}

        <Link href='/scores'>Click here to see the high scores</Link>
      </main>
    </div>
  )
}
