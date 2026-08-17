import { useState } from 'react'

import { tokenConfig } from '../../data/site'

import './Hero.css'

function Hero() {
    const [isCopied, setIsCopied] = useState(false)

    async function handleCopyContract() {
        try {
            await navigator.clipboard.writeText(tokenConfig.contractAddress)

            setIsCopied(true)

            window.setTimeout(() => {
                setIsCopied(false)
            }, 1600)
        } catch {
            setIsCopied(false)
        }
    }

    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__inner">
                <div className="hero__visual">
                    <div className="hero__character-wrap">
                        <img
                            className="hero__character"
                            src="/images/yarl-character.png"
                            alt="Yarl OG character"
                        />
                    </div>
                </div>

                <div className="hero__content">
                    <p className="hero__eyebrow">ROBINHOOD CHAIN</p>

                    <h1 className="hero__title" id="hero-title">
                        <span className="hero__title-top">$YARL OG</span>
                        <span className="hero__title-main">IS HERE.</span>
                    </h1>

                    <p className="hero__description">
                        The original Yarl has landed on Robinhood Chain.
                    </p>

                    <div className="hero__actions">
                        <a className="hero__buy" href="#buy">
                            BUY $YARL
                        </a>

                        <a className="hero__community" href="#community">
                            JOIN COMMUNITY
                        </a>
                    </div>

                    <div className="hero__contract">
                        <span className="hero__contract-label">CA</span>

                        <span className="hero__contract-address">
                            {tokenConfig.contractAddress}
                        </span>

                        <button
                            className="hero__copy"
                            type="button"
                            onClick={handleCopyContract}
                        >
                            {isCopied ? 'COPIED!' : 'COPY'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero