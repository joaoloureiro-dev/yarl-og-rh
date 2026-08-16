import { tokenConfig } from '../../data/site'
import { useTokenMarketData } from '../../hooks/useTokenMarketData'

import './BlockchainTicker.css'

interface TickerItem {
    label: string
    value: string
    sentiment?: 'positive' | 'negative'
}

function BlockchainTicker() {
    const { data } = useTokenMarketData(
        tokenConfig.chainId,
        tokenConfig.contractAddress,
    )

    const tickerItems: TickerItem[] = [
        {
            label: 'TOKEN',
            value: tokenConfig.ticker,
        },
        {
            label: 'PRICE',
            value: formatPrice(data.priceUsd),
        },
        {
            label: '24H',
            value: formatPercentage(data.priceChange24h),
            sentiment:
                data.priceChange24h === null
                    ? undefined
                    : data.priceChange24h >= 0
                        ? 'positive'
                        : 'negative',
        },
        {
            label: 'MC',
            value: formatCurrency(data.marketCap),
        },
        {
            label: 'LIQ',
            value: formatCurrency(data.liquidityUsd),
        },
        {
            label: 'VOL 24H',
            value: formatCurrency(data.volume24h),
        },
        {
            label: 'CHAIN',
            value: 'ROBINHOOD',
        },
    ]

    return (
        <div
            className="blockchain-ticker"
            aria-label="Live YARL market information"
        >
            <div className="blockchain-ticker__track">
                <TickerGroup items={tickerItems} />
                <TickerGroup items={tickerItems} ariaHidden />
                <TickerGroup items={tickerItems} ariaHidden />
                <TickerGroup items={tickerItems} ariaHidden />
            </div>
        </div>
    )
}

interface TickerGroupProps {
    items: TickerItem[]
    ariaHidden?: boolean
}

function TickerGroup({
    items,
    ariaHidden = false,
}: TickerGroupProps) {
    return (
        <div
            className="blockchain-ticker__group"
            aria-hidden={ariaHidden || undefined}
        >
            {items.map((item) => (
                <div
                    className="blockchain-ticker__item"
                    key={item.label}
                >
                    <span className="blockchain-ticker__label">
                        {item.label}
                    </span>

                    <span
                        className={[
                            'blockchain-ticker__value',
                            item.sentiment
                                ? `blockchain-ticker__value--${item.sentiment}`
                                : '',
                        ]
                            .filter(Boolean)
                            .join(' ')}
                    >
                        {item.value}
                    </span>

                    <span
                        className="blockchain-ticker__separator"
                        aria-hidden="true"
                    >
                        •
                    </span>
                </div>
            ))}
        </div>
    )
}

function formatCurrency(value: number | null): string {
    if (value === null) {
        return '—'
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 2,
    }).format(value)
}

function formatPercentage(value: number | null): string {
    if (value === null) {
        return '—'
    }

    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

function formatPrice(value: number | null): string {
    if (value === null) {
        return '—'
    }

    if (value >= 1) {
        return `$${value.toFixed(2)}`
    }

    if (value >= 0.01) {
        return `$${value.toFixed(4)}`
    }

    return `$${value.toPrecision(4)}`
}

export default BlockchainTicker