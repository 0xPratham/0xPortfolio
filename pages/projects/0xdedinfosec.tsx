import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Para from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Head from 'next/head'

const Dedinfosec = () => {
    return (
        <Layout>
            <Head>
                <title>0xDedinfosec Blog - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Title>
                    0xDedinfosec Blog <Badge>2020</Badge>
                </Title>
                <Para>
                    A dynamic blog website with sanity content management where
                    I host hackthebox writeups.
                </Para>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>NextJS, Sanity</span>
                    </ListItem>
                    <ListItem>
                        <Meta>WEBSITE</Meta>
                        <Link
                            href="https://0xdedinfosec.vercel.app"
                            target="_blank"
                        >
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/blog/blog-website-home.webp`}
                    alt="Blog HomePage"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/blog/blog-website-writeup.webp`}
                    alt="Blog Writeup"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/blog/blog-website-archives.webp`}
                    alt="Blog Archives"
                />
            </Container>
        </Layout>
    )
}

export default Dedinfosec
