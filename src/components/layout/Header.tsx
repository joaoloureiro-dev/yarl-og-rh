import { useState } from 'react'

import { tokenConfig } from '../../data/site'

import './Header.css'

const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'Community', href: '#community' },
]

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a
                    className="site-header__brand"
                    href="#top"
                    aria-label="Yarl OG home"
                    onClick={closeMenu}
                >
                    <img
                        className="site-header__logo"
                        src="/images/yarl-logo.png"
                        alt="Yarl OG"
                    />
                </a>

                <nav
                    className="site-header__desktop-nav"
                    aria-label="Primary navigation"
                >
                    {navigationItems.map((item) => (
                        <a
                            className="site-header__nav-link"
                            href={item.href}
                            key={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    className="site-header__buy site-header__buy--desktop"
                    href={tokenConfig.links.buy}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    BUY $YARL
                </a>

                <button
                    className={[
                        'site-header__menu-button',
                        isMenuOpen
                            ? 'site-header__menu-button--open'
                            : '',
                    ]
                        .filter(Boolean)
                        .join(' ')}
                    type="button"
                    aria-label={
                        isMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() =>
                        setIsMenuOpen((current) => !current)
                    }
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <nav
                id="mobile-navigation"
                className={[
                    'site-header__mobile-nav',
                    isMenuOpen
                        ? 'site-header__mobile-nav--open'
                        : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
                aria-label="Mobile navigation"
            >
                <div className="site-header__mobile-nav-inner">
                    {navigationItems.map((item) => (
                        <a
                            className="site-header__mobile-link"
                            href={item.href}
                            key={item.href}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        className="site-header__buy site-header__buy--mobile"
                        href={tokenConfig.links.buy}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        BUY $YARL
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header