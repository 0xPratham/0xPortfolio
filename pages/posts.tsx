import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Posts = () => {
    return (
        <Layout title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Popular Posts
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <Section delay="0">
                        <GridItem
                            title="Hackthebox Routerspace Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/routerspace.webp`}
                            href="https://0xdedinfosec.vercel.app/post/hackthebox-routerspace-writeup"
                            height="742px"
                            width="1186px"
                        />
                    </Section>
                    <Section delay="0.1">
                        <GridItem
                            title="Hackthebox Static Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/static.webp`}
                            href="https://0xdedinfosec.vercel.app/post/hackthebox-static-writeup"
                            height="745px"
                            width="1182px"
                        />
                    </Section>
                    <Section delay="0.2">
                        <GridItem
                            title="Hackthebox Forge Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/forge.webp`}
                            href="https://0xdedinfosec.vercel.app/post/hackthebox-forge-writeup"
                            height="746px"
                            width="1182px"
                        />
                    </Section>
                    <Section delay="0.3">
                        <GridItem
                            title="Hackthebox Undetected Writeup"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/posts/undetected.webp`}
                            href="https://0xdedinfosec.vercel.app/post/hackthebox-undetected-writeup"
                            height="742px"
                            width="1180px"
                        />
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Posts
