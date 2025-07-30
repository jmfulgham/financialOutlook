'use client'

import dynamic from 'next/dynamic'

//TODO update SSR later
const App = dynamic(() => import('../App'), { ssr: false })


export function ClientOnly() {
    return <App />
}
