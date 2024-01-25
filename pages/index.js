import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@components/Container'

const solanaWeb3 = require("@solana/web3.js");
console.log(solanaWeb3);

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
