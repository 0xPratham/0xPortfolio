import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Para from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Dedinfosec = () => {
    return (
        <Layout title="0xDedinfosec Blog">
            <Container>
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
                    src="/images/projects/blog/blog-website-home.png"
                    alt="Blog HomePage"
                />
                <ProjectImage
                    src="/images/projects/blog/blog-website-writeup.png"
                    alt="Blog Writeup"
                />
                <ProjectImage
                    src="/images/projects/blog/blog-website-archives.png"
                    alt="Blog Archives"
                />
            </Container>
        </Layout>
    )
}

export default Dedinfosec
