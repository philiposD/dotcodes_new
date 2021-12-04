import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'

export default function Snippets() {
  return (
    <Container>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Container>
  )
}
