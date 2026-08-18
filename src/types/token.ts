export interface TokenLinks {
    telegram: string
    x: string
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