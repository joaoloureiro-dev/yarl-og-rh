import type {
    DexScreenerPair,
    TokenMarketData,
} from '../types/market'

const DEXSCREENER_API_URL = 'https://api.dexscreener.com'

export async function getTokenMarketData(
    chainId: string,
    tokenAddress: string,
    signal?: AbortSignal,
): Promise<TokenMarketData> {
    const response = await fetch(
        `${DEXSCREENER_API_URL}/token-pairs/v1/${chainId}/${tokenAddress}`,
        {
            signal,
            headers: {
                Accept: 'application/json',
            },
        },
    )

    if (!response.ok) {
        throw new Error(
            `DEX Screener request failed with status ${response.status}`,
        )
    }

    const pairs = (await response.json()) as DexScreenerPair[]

    if (!Array.isArray(pairs) || pairs.length === 0) {
        throw new Error('No DEX Screener pairs found for token')
    }

    const pair = selectPrimaryPair(pairs)

    return {
        priceUsd: toNumber(pair.priceUsd),
        priceChange24h: pair.priceChange?.h24 ?? null,
        marketCap: pair.marketCap ?? pair.fdv ?? null,
        liquidityUsd: pair.liquidity?.usd ?? null,
        volume24h: pair.volume?.h24 ?? null,
    }
}

function selectPrimaryPair(pairs: DexScreenerPair[]): DexScreenerPair {
    return [...pairs].sort(
        (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0),
    )[0]
}

function toNumber(value?: string | null): number | null {
    if (!value) {
        return null
    }

    const parsedValue = Number(value)

    return Number.isFinite(parsedValue) ? parsedValue : null
}