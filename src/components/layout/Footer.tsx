import { useState } from 'react'

import { tokenConfig } from '../../data/site'

import './Footer.css'

function Footer() {
    const [isCopied, setIsCopied] = useState(false)

    async function handleCopyContract() {
        await navigator.clipboard.writeText(
            tokenConfig.contractAddress,
        )

        setIsCopied(true)

        window.setTimeout(() => {
            setIsCopied(false)
        }, 1600)
    }

    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__main">
                    <a
                        className="site-footer__brand"
                        href="#top"
                        aria-label="Back to top"
                    >
                        <img
                            className="site-footer__logo"
                            src="/images/yarl-logo.png"
                            alt="Yarl OG"
                        />

                        <span>$YARL OG</span>
                    </a>

                    <nav
                        className="site-footer__nav"
                        aria-label="Footer navigation"
                    >
                        <a href="#about">
                            ABOUT
                        </a>

                        <a href="#tokenomics">
                            TOKENOMICS
                        </a>

                        <a href="#how-to-buy">
                            HOW TO BUY
                        </a>

                        <a href="#community">
                            COMMUNITY
                        </a>
                    </nav>

                    <div className="site-footer__socials">
                        <a
                            href={tokenConfig.links.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            TELEGRAM
                        </a>

                        <a
                            href={tokenConfig.links.x}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            X
                        </a>
                    </div>
                </div>

                <div className="site-footer__contract">
                    <span className="site-footer__contract-label">
                        OFFICIAL CONTRACT
                    </span>

                    <code className="site-footer__contract-address">
                        {tokenConfig.contractAddress}
                    </code>

                    <div className="site-footer__copy-wrap">
                        <button
                            className="site-footer__copy"
                            type="button"
                            onClick={handleCopyContract}
                        >
                            {isCopied
                                ? 'COPIED'
                                : 'COPY CA'}
                        </button>
                    </div>
                </div>

                <div className="site-footer__notice">
                    <strong>
                        NOT FINANCIAL ADVICE
                    </strong>

                    <p>
                        $YARL is a community-driven meme token.
                        Always verify the official contract and
                        do your own research.
                    </p>
                </div>

                <div className="site-footer__bottom">
                    <span>
                        © 2026 YARL OG
                    </span>

                    <span>
                        BUILT FOR ROBINHOOD CHAIN
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer