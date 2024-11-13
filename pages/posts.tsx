import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Head from 'next/head'

const Posts = () => {
    return (
        <Layout>
            <Head>
                <title>Posts - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Popular Posts
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <Section delay="0">
                        <GridItem
                            title="Hackthebox Routerspace Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/routerspace.webp`}
                            href="https://0xdedinfosec.vercel.app/blog/hackthebox-routerspace-writeup"
                            height={742}
                            width={1186}
                        />
                    </Section>
                    <Section delay="0.1">
                        <GridItem
                            title="Hackthebox Static Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/static.webp`}
                            href="https://0xdedinfosec.vercel.app/blog/hackthebox-static-writeup"
                            height={745}
                            width={1182}
                        />
                    </Section>
                    <Section delay="0.2">
                        <GridItem
                            title="Hackthebox Forge Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/forge.webp`}
                            href="https://0xdedinfosec.vercel.app/blog/hackthebox-forge-writeup"
                            height={746}
                            width={1182}
                        />
                    </Section>
                    <Section delay="0.3">
                        <GridItem
                            title="Hackthebox Undetected Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/undetected.webp`}
                            href="https://0xdedinfosec.vercel.app/blog/hackthebox-undetected-writeup"
                            height={742}
                            width={1180}
                        />
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Posts
