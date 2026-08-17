import Header from './components/layout/Header'
import BlockchainTicker from './components/ticker/BlockchainTicker'
import Hero from './sections/Hero/Hero'

function App() {
  return (
    <>
      <div id="top" />

      <BlockchainTicker />
      <Header />

      <main>
        <Hero />
      </main>
    </>
  )
}

export default App