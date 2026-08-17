import { motion } from 'framer-motion'

import YarlPanel from '../../components/ui/YarlPanel'

import './About.css'

const facts = [
    {
        label: 'ORIGIN',
        value: '2015',
    },
    {
        label: 'MISSION',
        value: 'PEPE KILLER',
    },
    {
        label: 'CHAIN',
        value: 'ROBINHOOD',
    },
]

function About() {
    return (
        <section
            className="about"
            id="about"
            aria-labelledby="about-title"
        >
            <div className="about__inner">
                <div className="about__layout">
                    <div className="about__content">
                        <motion.div
                            className="about__heading"
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
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <p className="about__eyebrow">
                                THE LORE
                            </p>

                            <h2
                                className="about__title"
                                id="about-title"
                            >
                                YARL
                                <span>THE ORIGINAL PEPE KILLER</span>
                            </h2>

                            <p className="about__subtitle">
                                ON ROBINHOOD CHAIN
                            </p>
                        </motion.div>

                        <motion.div
                            className="about__story"
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
                                amount: 0.15,
                            }}
                            transition={{
                                delay: 0.08,
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <YarlPanel variant="yellow">
                                <div className="about__story-copy">
                                    <p>
                                        In 2015, someone on 4chan tried to steal
                                        Pepe&apos;s throne.
                                    </p>

                                    <p>
                                        He drew Yarl. No funny frog. No sad face.
                                        Just pure intention: dethrone Pepe.
                                    </p>

                                    <p>
                                        The community laughed him off.
                                        <strong> “Forced meme.” </strong>
                                        Pepe stayed king. Yarl disappeared into
                                        the shadows.
                                    </p>

                                    <p className="about__story-highlight">
                                        But real origin stories don&apos;t die.
                                    </p>

                                    <p>
                                        Now, on Robinhood Chain — the new
                                        playground of retail, tokens, and real
                                        liquidity — Yarl is back.
                                    </p>

                                    <p>
                                        Not as a copy. Not as an imitation.
                                    </p>

                                    <p>
                                        This is the OG Yarl. The first. The real
                                        Pepe Killer on Robinhood Chain.
                                    </p>

                                    <p>
                                        While everyone is still chasing Pepe
                                        clones and random frogs, here sits the
                                        only one who was truly born to kill the
                                        king. Same cult. Same energy. Only now
                                        with the perfect chain underneath: fast
                                        blocks, low fees, and a whole wave of
                                        new retail just arriving through
                                        Robinhood.
                                    </p>

                                    <p>
                                        Yarl isn&apos;t the “next meme.”
                                    </p>

                                    <p className="about__story-highlight">
                                        Yarl is the correction.
                                    </p>

                                    <p>
                                        The underdog who waited years until the
                                        market was ready.
                                    </p>

                                    <p>
                                        Pepe had his run.
                                    </p>

                                    <p className="about__story-final">
                                        Now it&apos;s Yarl&apos;s turn.
                                    </p>

                                    <p>
                                        This is the OG on Robinhood Chain.
                                    </p>

                                    <p className="about__story-final">
                                        The one that actually matters.
                                    </p>
                                </div>
                            </YarlPanel>
                        </motion.div>
                    </div>

                    <motion.aside
                        className="about__aside"
                        initial={{
                            opacity: 0,
                            x: 24,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            delay: 0.12,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="about__facts">
                            {facts.map((fact, index) => (
                                <div
                                    className={`about__fact about__fact--${index + 1}`}
                                    key={fact.label}
                                >
                                    <span className="about__fact-label">
                                        {fact.label}
                                    </span>

                                    <span className="about__fact-value">
                                        {fact.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="about__quote">
                            <span className="about__quote-small">
                                PEPE HAD HIS RUN.
                            </span>

                            <strong>
                                NOW IT&apos;S
                                <span> YARL&apos;S TURN.</span>
                            </strong>
                        </div>

                        <motion.div
                            className="about__visual"
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="about__visual-frame">
                                <video
                                    className="about__visual-video"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    aria-label="Yarl OG lore animation"
                                >
                                    <source
                                        src="/videos/yarl-lore.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </motion.div>
                    </motion.aside>
                </div>
            </div>
        </section>
    )
}

export default About