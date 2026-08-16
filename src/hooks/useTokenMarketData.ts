import { useEffect, useState } from 'react'

import { getTokenMarketData } from '../lib/dexscreener'
import type { TokenMarketData } from '../types/market'

const REFRESH_INTERVAL = 30_000

const emptyMarketData: TokenMarketData = {
    priceUsd: null,
    priceChange24h: null,
    marketCap: null,
    liquidityUsd: null,
    volume24h: null,
}

export function useTokenMarketData(
    chainId: string,
    tokenAddress: string,
) {
    const [data, setData] =
        useState<TokenMarketData>(emptyMarketData)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        async function loadMarketData() {
            try {
                const marketData = await getTokenMarketData(
                    chainId,
                    tokenAddress,
                    controller.signal,
                )

                setData(marketData)
            } catch (error) {
                if (
                    error instanceof DOMException &&
                    error.name === 'AbortError'
                ) {
                    return
                }

                console.error(
                    'Unable to load YARL market data:',
                    error,
                )
            } finally {
                setIsLoading(false)
            }
        }

        void loadMarketData()

        const intervalId = window.setInterval(() => {
            void loadMarketData()
        }, REFRESH_INTERVAL)

        return () => {
            controller.abort()
            window.clearInterval(intervalId)
        }
    }, [chainId, tokenAddress])

    return {
        data,
        isLoading,
    }
}