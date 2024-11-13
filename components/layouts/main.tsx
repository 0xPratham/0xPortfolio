import { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import type { NextRouter } from 'next/router'
import Navbar from '../navbar'
import VoxelHackerRoom from '../voxel-hacker-room'
import Footer from '../footer'
import NoSsr from '../no-ssr'

interface props {
    children?: ReactNode
    router?: NextRouter
}

const Main = (props: props) => {
    return (
        <Box as="main" pb="8">
            <Navbar path={props.router?.asPath} />
            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelHackerRoom />
                </NoSsr>
                {props.children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
