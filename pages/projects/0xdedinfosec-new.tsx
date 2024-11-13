import Head from 'next/head'
import Layout from '../../components/layouts/article'
import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, ProjectImage, Title } from '../../components/projects'
import Para from '../../components/paragraph'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const cyberunfolded = () => {
    return (
        <Layout>
            <Head>
                <title>0xDedinfosec New - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Title>
                    0xDedinfosec New <Badge>2023</Badge>
                </Title>
                <Para>
                    Explore the ever-evolving realm of cybersecurity,
                    cutting-edge technology, and intricate geopolitics through
                    our blogs, timely updates and series. Our website makes it
                    easy and convenient for anyone to learn about cyber concepts
                    through our informative and enjoyable blogs.
                </Para>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>WEBSITE</Meta>
                        <Link
                            href="https://0xdedinfosec.vercel.app"
                            target="_blank"
                        >
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>Next.js, TypeScript, SQLite, Redis, etc.</span>
                    </ListItem>
                </List>
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/new-blog/main.png`}
                    alt="0xDedinfosec HomePage"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/new-blog/1.png`}
                    alt="0xDedinfosec Blog Page"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/new-blog/2.png`}
                    alt="0xDedinfosec Blog Page 2"
                />
            </Container>
        </Layout>
    )
}

export default cyberunfolded
