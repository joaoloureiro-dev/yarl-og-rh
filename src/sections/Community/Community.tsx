import { useState } from 'react'
import { motion } from 'framer-motion'

import { tokenConfig } from '../../data/site'

import './Community.css'

function Community() {
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
        <section
            className="community"
            id="community"
            aria-labelledby="community-title"
        >
            <div className="community__inner">
                <motion.div
                    className="community__heading"
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <p className="community__eyebrow">
                        THE COMMUNITY
                    </p>

                    <h2
                        className="community__title"
                        id="community-title"
                    >
                        JOIN THE
                        <span>CULT.</span>
                    </h2>

                    <p className="community__description">
                        Yarl was born to challenge the king.
                        Now the community takes it from here.
                    </p>
                </motion.div>

                <div className="community__layout">
                    <motion.div
                        className="community__main-motion"
                        initial={{
                            opacity: 0,
                            x: -28,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="community__main">
                            <span className="community__main-label">
                                $YARL OG
                            </span>

                            <strong className="community__main-title">
                                THE OG IS BACK.
                            </strong>

                            <p className="community__main-copy">
                                Follow the story, join the raids
                                and be part of the Yarl community
                                on Robinhood Chain.
                            </p>

                            <div className="community__socials">
                                <a
                                    className="community__social community__social--telegram"
                                    href={tokenConfig.links.telegram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TELEGRAM
                                </a>

                                <a
                                    className="community__social community__social--x"
                                    href={tokenConfig.links.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FOLLOW ON X
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="community__side">
                        <motion.div
                            className="community__statement-motion"
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="community__statement">
                                <span>
                                    NOT ANOTHER
                                </span>

                                <strong>
                                    PEPE CLONE.
                                </strong>

                                <p>
                                    THE ORIGINAL PEPE KILLER.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="community__contract-motion"
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                delay: 0.08,
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="community__contract">
                                <span className="community__contract-label">
                                    OFFICIAL CONTRACT
                                </span>

                                <code className="community__contract-address">
                                    {tokenConfig.contractAddress}
                                </code>

                                <button
                                    className="community__copy"
                                    type="button"
                                    onClick={handleCopyContract}
                                >
                                    {isCopied
                                        ? 'COPIED'
                                        : 'COPY CA'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community