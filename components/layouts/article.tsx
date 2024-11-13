import { motion } from 'framer-motion'
import { GridItemStyle } from '../grid-item'
import { ReactNode } from 'react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

interface props {
    children: ReactNode
}

const Layout = ({ children }: props) => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'tween' }}
            style={{ position: 'relative' }}
        >
            <>
                {children}
                <GridItemStyle />
            </>
        </motion.article>
    )
}

export default Layout
