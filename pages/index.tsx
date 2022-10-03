import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    Link,
    Icon,
    ListItem
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioTimeLine } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import Share from '../public/images/projects/0xshare/0xshare-home.png'
import Dedinfosec from '../public/images/projects/blog/blog-website-home.png'

const Home: NextPage = () => {
    return (
        <Layout title="Home">
            <Container>
                <Box
                    display="flex"
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p="3"
                    textAlign="center"
                    mb="6"
                >
                    Hello, I&apos;m pratham Information security enthusiast and
                    a full stack developer
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="title">
                            Pratham
                        </Heading>
                        <p>
                            Network, Web Application Penetration Tester | Full
                            Stack Developer | CTF Player
                        </p>
                    </Box>
                </Box>
                <Section delay="0.1">
                    <Heading mt="6" as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        A Self-learner IT professional seeking a technical
                        position in which I can apply existing skills and
                        continue to work with the latest technologies. With
                        professional experience in information technology, my
                        expertise revolves around Network, Web Application
                        Penetration Testing.
                    </Paragraph>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/projects">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay="0.2">
                    <Heading mt="6" as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioTimeLine>2002</BioTimeLine>
                        Born in India
                    </BioSection>
                    <BioSection>
                        <BioTimeLine>2024</BioTimeLine>
                        Completed the Btech In Cyber Security at the Panipat
                        Institute of Engineering and Technology
                    </BioSection>
                </Section>
                <Section delay="0.3">
                    <Heading mt="6" as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        CTF, Web Development, Gaming, Linux Privilege Escalation
                    </Paragraph>
                </Section>
                <Section delay="0.3">
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="https://github.com/0xPratham"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @0xPratham
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://twitter.com/0xdedinfosec"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                    @0xdedinfosec
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        <GridItem
                            href="https://0xshare.vercel.app"
                            title="0xShare"
                            thumbnail={Share.src}
                            width="2880px"
                            height="1652px"
                        >
                            Anonymous File Sharing Website
                        </GridItem>
                        <GridItem
                            href="https://0xdedinfosec.vercel.app"
                            title="0xDedinfosec Blog"
                            thumbnail={Dedinfosec.src}
                            width="2880px"
                            height="1652px"
                        >
                            Hackthebox Blog Website
                        </GridItem>
                    </SimpleGrid>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/posts">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                Popular Posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
