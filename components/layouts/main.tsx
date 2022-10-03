import { ReactNode } from 'react'
import Head from 'next/head'
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
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Home - 0xPratham</title>
            </Head>
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
