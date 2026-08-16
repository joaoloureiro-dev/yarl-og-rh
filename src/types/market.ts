export interface TokenMarketData {
    priceUsd: number | null
    priceChange24h: number | null
    marketCap: number | null
    liquidityUsd: number | null
    volume24h: number | null
}

export interface DexScreenerPair {
    chainId?: string
    dexId?: string
    pairAddress?: string
    priceUsd?: string | null

    priceChange?: {
        h24?: number
    } | null

    volume?: {
        h24?: number
    }

    liquidity?: {
        usd?: number
    } | null

    fdv?: number | null
    marketCap?: number | null
}