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
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Home - 0xPratham</title>
            </Head>
            <Container mb={10}>
                <Box
                    display="flex"
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p="3"
                    textAlign="center"
                    mb="6"
                >
                    Hello, I&apos;m Pratham, an Application Security enthusiast
                    and Full Stack Developer
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="title">
                            Pratham
                        </Heading>
                        <p>
                            System Administrator | Application Security
                            Specialist | Full Stack Developer | CTF Enthusiast
                        </p>
                    </Box>
                </Box>
                <Section delay="0.1">
                    <Heading mt="6" as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Self-motivated IT professional seeking a technical
                        position where I can leverage my existing skills and
                        continue working with the latest technologies. With
                        professional experience in information technology, I
                        bring expertise in system administration, web
                        application penetration testing, and full stack
                        development.
                    </Paragraph>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/projects" prefetch={true}>
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
                        Completed a Bachelor of Technology (B.Tech) in Computer
                        Science and Engineering at Sarvepalli Radhakrishnan
                        University, Bhopal
                    </BioSection>
                </Section>
                <Section delay="0.3">
                    <Heading mt="6" as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Capture the Flag (CTF) Competitions, Web Development,
                        Gaming, System Security, and System Administration
                    </Paragraph>
                </Section>
                <Section delay="0.3">
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List mb={4}>
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
                            href="https://thefileslab.com"
                            title="The Files Lab"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/thefileslab/main.png`}
                            width={2880}
                            height={1652}
                        >
                            Share And Convert Files Confidentially
                        </GridItem>
                        <GridItem
                            href="https://cyberunfolded.in"
                            title="CyberUnfolded"
                            thumbnail={`${process.env.NEXT_PUBLIC_CDN_URL}/images/projects/cyberunfolded/main.png`}
                            width={2880}
                            height={1652}
                        >
                            Hackthebox Blog Website
                        </GridItem>
                    </SimpleGrid>
                    <Box textAlign="center" my={4}>
                        <NextLink href="/posts" prefetch={true}>
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
