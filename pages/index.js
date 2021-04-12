import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deymer Hernández</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Deymer Hernández
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/Deymer_H"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &copy;
          <h4>DeymerH</h4>
        </a>
      </footer>
    </div>
  )
}
