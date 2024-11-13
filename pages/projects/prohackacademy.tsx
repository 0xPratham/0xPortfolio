import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Para from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Head from 'next/head'

const ProHackAcademy = () => {
    return (
        <Layout>
            <Head>
                <title>ProHackAcademy - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Title>
                    ProHackAcademy <Badge>2020 - 2022</Badge>
                </Title>
                <Para>
                    A capture the flag website for startup which handles 200
                    users per day and it&apos;s a fully secured website which
                    runs in the production environment.
                </Para>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>NextJS, NodeJS, MongoDB, Redis</span>
                    </ListItem>
                    <ListItem>
                        <Meta>FRONTEND SOURCE</Meta>
                        <Link
                            href="https://github.com/0xPratham/prohackacademy-frontend"
                            target="_blank"
                        >
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>BACKEND SOURCE</Meta>
                        <Link
                            href="https://github.com/0xPratham/prohackacademy-backend"
                            target="_blank"
                        >
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/ctf/ctf-website-home.webp`}
                    alt="ProHackAcademy HomePage"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/ctf/ctf-website-dashboard.webp`}
                    alt="ProHackAcademy Dashboard"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/ctf/ctf-website-profile.webp`}
                    alt="ProHackAcademy Profile"
                />
            </Container>
        </Layout>
    )
}

export default ProHackAcademy
