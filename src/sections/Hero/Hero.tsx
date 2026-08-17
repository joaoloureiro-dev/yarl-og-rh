import { useState } from 'react'
import { motion } from 'framer-motion'

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
                <motion.div
                    className="hero__visual"
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <motion.div
                        className="hero__character-float"
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            duration: 4.5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                    >
                        <div className="hero__character-wrap">
                            <img
                                className="hero__character"
                                src="/images/yarl-character.png"
                                alt="Yarl OG character"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hero__content">
                    <motion.p
                        className="hero__eyebrow"
                        initial={{
                            opacity: 0,
                            y: 12,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.1,
                            duration: 0.45,
                        }}
                    >
                        ROBINHOOD CHAIN
                    </motion.p>

                    <h1 className="hero__title" id="hero-title">
                        <motion.span
                            className="hero__title-top"
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.15,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            $YARL OG
                        </motion.span>

                        <motion.span
                            className="hero__title-main"
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                rotate: -3,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: -1,
                            }}
                            transition={{
                                delay: 0.22,
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            IS HERE.
                        </motion.span>
                    </h1>

                    <motion.p
                        className="hero__description"
                        initial={{
                            opacity: 0,
                            y: 14,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                        }}
                    >
                        The original Yarl has landed on Robinhood Chain.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{
                            opacity: 0,
                            y: 14,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.38,
                            duration: 0.5,
                        }}
                    >
                        <a
                            className="hero__buy"
                            href={tokenConfig.links.buy}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BUY $YARL
                        </a>

                        <a
                            className="hero__community"
                            href={tokenConfig.links.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            JOIN COMMUNITY
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero__contract"
                        initial={{
                            opacity: 0,
                            y: 14,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.46,
                            duration: 0.5,
                        }}
                    >
                        <span className="hero__contract-label">
                            CA
                        </span>

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
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero