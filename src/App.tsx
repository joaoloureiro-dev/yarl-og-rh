import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BlockchainTicker from './components/ticker/BlockchainTicker'
import About from './sections/About/About'
import Community from './sections/Community/Community'
import Hero from './sections/Hero/Hero'
import HowToBuy from './sections/HowToBuy/HowToBuy'
import Tokenomics from './sections/Tokenomics/Tokenomics'

function App() {
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
      >
        SKIP TO CONTENT
      </a>

      <div id="top" />

      <BlockchainTicker />
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Community />
      </main>

      <Footer />
    </>
  )
}

export default App