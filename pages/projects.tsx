import type { NextPage } from 'next'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

const Projects: NextPage = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay="0">
                        <ProjectsGridItem
                            id="prohackacademy"
                            title="ProHackAcademy"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/ctf/ctf-website-home.webp`}
                            width="720px"
                            height="400px"
                        >
                            Capture the flag website for startup which handles
                            200 users per day frontend + backend
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.1">
                        <ProjectsGridItem
                            id="0xshare"
                            title="0xShare"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/0xshare/0xshare-home.webp`}
                            width="2880px"
                            height="1652px"
                        >
                            0xshare is a file sharing service where people share
                            their files anonymously
                        </ProjectsGridItem>
                    </Section>
                    <Section delay="0.2">
                        <ProjectsGridItem
                            id="0xdedinfosec"
                            title="0xDedinfosec Blog"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/blog/blog-website-home.webp`}
                            width="1366px"
                            height="768px"
                        >
                            Blog website with sanity.io, where I post hackthebox
                            machines write-ups
                        </ProjectsGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
