import type { PropsWithChildren } from 'react'

import './YarlPanel.css'

type YarlPanelVariant = 'default' | 'yellow' | 'green'

interface YarlPanelProps extends PropsWithChildren {
    variant?: YarlPanelVariant
    className?: string
}

function YarlPanel({
    children,
    variant = 'default',
    className = '',
}: YarlPanelProps) {
    const classes = [
        'yarl-panel',
        `yarl-panel--${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <section className={classes}>
            <div className="yarl-panel__content">{children}</div>
        </section>
    )
}

export default YarlPanel