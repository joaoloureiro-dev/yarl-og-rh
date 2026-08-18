import Header from './components/layout/Header'
import BlockchainTicker from './components/ticker/BlockchainTicker'
import About from './sections/About/About'
import Hero from './sections/Hero/Hero'
import HowToBuy from './sections/HowToBuy/HowToBuy'
import Tokenomics from './sections/Tokenomics/Tokenomics'

function App() {
  return (
    <>
      <div id="top" />

      <BlockchainTicker />
      <Header />

      <main>
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
      </main>
    </>
  )
}

export default App