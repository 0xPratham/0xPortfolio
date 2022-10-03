import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { ReactNode } from 'react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

interface props {
    children: ReactNode
    title: string
}

const Layout = ({ children, title }: props) => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                <Head>
                    <title>{title} - 0xPratham</title>
                </Head>
                {children}
                <GridItemStyle />
            </>
        </motion.article>
    )
}

export default Layout
