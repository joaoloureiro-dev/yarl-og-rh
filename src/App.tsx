import Header from './components/layout/Header'
import BlockchainTicker from './components/ticker/BlockchainTicker'
import About from './sections/About/About'
import Hero from './sections/Hero/Hero'

function App() {
  return (
    <>
      <div id="top" />

      <BlockchainTicker />
      <Header />

      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App