import NextLink from 'next/link'
import {
    Text,
    Box,
    Heading,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import Head from 'next/head'

const NotFound = () => {
    return (
        <Container mb={10}>
            <Head>
                <title>404 - 0xPratham</title>
            </Head>
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box textAlign="center" my={6}>
                <NextLink href="/" prefetch={true}>
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
