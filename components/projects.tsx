import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

interface TitleProps {
    children: ReactNode
}

interface ProjectImageProps {
    src: string
    alt: string
}

export const Title = ({ children }: TitleProps) => {
    return (
        <>
            <Box>
                <NextLink href="/projects">
                    <Link>Projects</Link>
                </NextLink>
            </Box>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </>
    )
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => {
    return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }: TitleProps) => {
    return (
        <Badge colorScheme="green" mr={2}>
            {children}
        </Badge>
    )
}
