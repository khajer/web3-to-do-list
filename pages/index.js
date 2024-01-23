import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@components/Container'

export default function Home() {
  var title = "Todo List";
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
        <Container />
      </main>

      <Footer />
    </div>
  )
}
