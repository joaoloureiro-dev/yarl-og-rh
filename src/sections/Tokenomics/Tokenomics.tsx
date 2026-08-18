import { motion } from 'framer-motion'

import { tokenConfig } from '../../data/site'
import { useTokenMarketData } from '../../hooks/useTokenMarketData'

import './Tokenomics.css'

interface TokenomicsItem {
    label: string
    value: string
    detail: string
    className: string
}

function Tokenomics() {
    const { data } = useTokenMarketData(
        tokenConfig.chainId,
        tokenConfig.contractAddress,
    )

    const hasLiquidity = data.liquidityUsd !== null

    const tokenomics: TokenomicsItem[] = [
        {
            label: 'TOTAL SUPPLY',
            value: '1B',
            detail: '1,000,000,000 $YARL',
            className: 'tokenomics__card--supply',
        },
        {
            label: 'BUY / SELL TAX',
            value: '0%',
            detail: 'ZERO TAX',
            className: 'tokenomics__card--tax',
        },
        {
            label: 'CHAIN',
            value: 'RH',
            detail: 'ROBINHOOD CHAIN',
            className: 'tokenomics__card--chain',
        },
        {
            label: 'LIQUIDITY',
            value: hasLiquidity
                ? formatCurrency(data.liquidityUsd)
                : 'PENDING',
            detail: hasLiquidity
                ? 'LIVE ON UNISWAP'
                : 'AWAITING DEX INDEXING',
            className: 'tokenomics__card--liquidity',
        },
    ]

    return (
        <section
            className="tokenomics"
            id="tokenomics"
            aria-labelledby="tokenomics-title"
        >
            <div className="tokenomics__inner">
                <motion.div
                    className="tokenomics__heading"
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
                    <p className="tokenomics__eyebrow">
                        THE NUMBERS
                    </p>

                    <h2
                        className="tokenomics__title"
                        id="tokenomics-title"
                    >
                        SIMPLE.
                        <span>NO NONSENSE.</span>
                    </h2>

                    <p className="tokenomics__description">
                        No complicated tokenomics. Just $YARL on Robinhood Chain.
                    </p>
                </motion.div>

                <motion.div
                    className="tokenomics__grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {tokenomics.map((item) => (
                        <motion.div
                            className="tokenomics__card-motion"
                            key={item.label}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 24,
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
                                className={`tokenomics__card ${item.className}`}
                            >
                                <span className="tokenomics__card-label">
                                    {item.label}
                                </span>

                                <strong className="tokenomics__card-value">
                                    {item.value}
                                </strong>

                                <span className="tokenomics__card-detail">
                                    {item.detail}
                                </span>
                            </article>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function formatCurrency(value: number | null): string {
    if (value === null) {
        return 'PENDING'
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 2,
    }).format(value)
}

export default Tokenomics