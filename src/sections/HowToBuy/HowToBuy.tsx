import { motion } from 'framer-motion'

import { tokenConfig } from '../../data/site'

import './HowToBuy.css'

const steps = [
    {
        number: '01',
        title: 'GET A WALLET',
        description:
            'Use a wallet compatible with Robinhood Chain and make sure the network is ready.',
        className: 'how-to-buy__card--wallet',
    },
    {
        number: '02',
        title: 'FUND YOUR WALLET',
        description:
            'Add funds to your wallet so you are ready to swap on Robinhood Chain.',
        className: 'how-to-buy__card--fund',
    },
    {
        number: '03',
        title: 'BUY $YARL',
        description:
            'Open Uniswap, select $YARL and swap directly using the official contract.',
        className: 'how-to-buy__card--swap',
    },
]

function HowToBuy() {
    return (
        <section
            className="how-to-buy"
            id="how-to-buy"
            aria-labelledby="how-to-buy-title"
        >
            <div className="how-to-buy__inner">
                <motion.div
                    className="how-to-buy__heading"
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
                    <p className="how-to-buy__eyebrow">
                        THREE EASY STEPS
                    </p>

                    <h2
                        className="how-to-buy__title"
                        id="how-to-buy-title"
                    >
                        HOW TO
                        <span>BUY $YARL</span>
                    </h2>

                    <p className="how-to-buy__description">
                        No complicated process. Get ready, fund your wallet and
                        swap.
                    </p>
                </motion.div>

                <motion.div
                    className="how-to-buy__steps"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.18,
                    }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    {steps.map((step) => (
                        <motion.div
                            className="how-to-buy__card-motion"
                            key={step.number}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 28,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                },
                            }}
                        >
                            <article
                                className={`how-to-buy__card ${step.className}`}
                            >
                                <span className="how-to-buy__number">
                                    {step.number}
                                </span>

                                <h3 className="how-to-buy__card-title">
                                    {step.title}
                                </h3>

                                <p className="how-to-buy__card-description">
                                    {step.description}
                                </p>
                            </article>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="how-to-buy__action"
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        delay: 0.15,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <a
                        className="how-to-buy__button"
                        href={tokenConfig.links.buy}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BUY $YARL
                    </a>

                    <p className="how-to-buy__contract">
                        ALWAYS VERIFY THE OFFICIAL CONTRACT
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default HowToBuy