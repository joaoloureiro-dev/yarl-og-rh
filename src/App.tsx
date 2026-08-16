import Header from './components/layout/Header'
import BlockchainTicker from './components/ticker/BlockchainTicker'
import YarlPanel from './components/ui/YarlPanel'

function App() {
  return (
    <>
      <div id="top" />

      <BlockchainTicker />
      <Header />

      <main
        style={{
          minHeight: '100vh',
          padding: 'var(--page-padding)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <YarlPanel variant="yellow">
            <h1
              style={{
                fontSize: 'var(--font-size-3xl)',
              }}
            >
              Yarl OG
            </h1>

            <p
              style={{
                marginTop: 'var(--space-3)',
                color: 'var(--color-text-muted)',
              }}
            >
              The OG on Robinhood Chain.
            </p>
          </YarlPanel>
        </div>
      </main>
    </>
  )
}

export default App