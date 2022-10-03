import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

interface props {
    children: ReactNode
}

const NoSSR = ({ children }: props) => {
    return <>{children}</>
}

export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false
})
