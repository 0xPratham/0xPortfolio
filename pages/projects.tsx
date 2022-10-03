import type { NextPage } from 'next'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'
import CtfWebsiteHome from '../public/images/projects/ctf/ctf-website-home.png'
import ShareHomePage from '../public/images/projects/0xshare/0xshare-home.png'
import BlogHomePage from '../public/images/projects/blog/blog-website-home.png'
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
                            thumbnail={CtfWebsiteHome.src}
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
                            thumbnail={ShareHomePage.src}
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
                            thumbnail={BlogHomePage.src}
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
