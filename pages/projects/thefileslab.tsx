import Head from 'next/head'
import Layout from '../../components/layouts/article'
import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import { Meta, ProjectImage, Title } from '../../components/projects'
import Para from '../../components/paragraph'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const thefileslab = () => {
    return (
        <Layout>
            <Head>
                <title>TheFilesLab - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Title>
                    TheFilesLab <Badge>2024</Badge>
                </Title>
                <Para>
                    Explore the versatile offerings of The Files Lab website,
                    where convenience meets security. Transform files
                    effortlessly with our reliable file conversion service,
                    supporting diverse formats. Enhance data privacy with our
                    advanced encryption tools ensuring the utmost protection for
                    both files and text. Trust The Files Lab as your go-to
                    platform seamlessly bridging the gap between efficient file
                    needs and top-tier security for a comprehensive and
                    user-friendly experience.
                </Para>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>WEBSITE</Meta>
                        <Link href="https://thefileslab.com" target="_blank">
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>
                            Next.js, Hono.js, TypeScript, Libsodium,
                            XChaCha20-Poly1305, ML-KEM (NIST FIPS 203), SQLite,
                            Redis, Docker, AWS S3, AWS SQS, etc.
                        </span>
                    </ListItem>
                </List>
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/main.png`}
                    alt="TheFilesLab HomePage"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/1.png`}
                    alt="TheFilesLab Share Service"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/2.png`}
                    alt="TheFilesLab Convert Service"
                />
                <ProjectImage
                    src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/3.png`}
                    alt="TheFilesLab Secure Chat"
                />
            </Container>
        </Layout>
    )
}

export default thefileslab
