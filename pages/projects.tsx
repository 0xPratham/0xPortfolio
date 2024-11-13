import type { NextPage } from 'next'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Head from 'next/head'

const Projects: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Projects - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay="0">
                        <ProjectsGridItem
                            id="thefileslab"
                            title="The Files Lab"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/main.png`}
                            width={720}
                            height={400}
                        >
                            Fast file conversion with top-notch security.
                            Convert, protect, and manage your files effortlessly
                            in one secure platform.
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.1">
                        <ProjectsGridItem
                            id="cyberunfolded"
                            title="Cyber Unfolded"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/cyberunfolded/main.png`}
                            width={720}
                            height={400}
                        >
                            Created a blog platform enabling user-generated
                            content and cybersecurity knowledge sharing, with
                            7,000 monthly active users.
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.2">
                        <ProjectsGridItem
                            id="prohackacademy"
                            title="ProHackAcademy"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/ctf/ctf-website-home.webp`}
                            width={720}
                            height={400}
                        >
                            Capture the flag website for startup which handles
                            200 users per day frontend + backend
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.3">
                        <ProjectsGridItem
                            id="0xdedinfosec"
                            title="0xDedinfosec Blog"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/blog/blog-website-home.webp`}
                            width={1366}
                            height={768}
                        >
                            Blog website with sanity.io, where I post hackthebox
                            machines write-ups
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.4">
                        <ProjectsGridItem
                            id="0xdedinfosec-new"
                            title="0xDedinfosec Blog (New)"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/new-blog/main.png`}
                            width={1366}
                            height={768}
                        >
                            Redesigned blog website with Astro, where I post CTF
                            write-ups
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.5">
                        <ProjectsGridItem
                            id="0xshare"
                            title="0xShare"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/0xshare/0xshare-home.webp`}
                            width={2880}
                            height={1652}
                        >
                            0xshare is a file sharing service where people share
                            their files anonymously
                        </ProjectsGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
