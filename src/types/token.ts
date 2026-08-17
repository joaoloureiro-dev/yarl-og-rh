export interface TokenLinks {
    telegram: string
    buy: string
}

export interface TokenConfig {
    name: string
    ticker: string
    contractAddress: string
    chain: string
    chainId: string
    links: TokenLinks
}