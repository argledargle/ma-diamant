import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Diamant</title>
        <meta name='description' content='A game of press-your-luck' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
