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
                <title>CyberUnfolded - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Title>
                    CyberUnfolded <Badge>2023</Badge>
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
                        <Link href="https://cyberunfolded.in" target="_blank">
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>
                            Next.js, Hono.js, TypeScript, Directus, SQLite,
                            Redis, etc.
                        </span>
                    </ListItem>
                </List>
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/cyberunfolded/main.png`}
                    alt="CyberUnfolded HomePage"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/cyberunfolded/1.png`}
                    alt="CyberUnfolded Blog Page"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/cyberunfolded/2.png`}
                    alt="CyberUnfolded Join Page"
                />
            </Container>
        </Layout>
    )
}

export default cyberunfolded
