import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface props {
    children?: ReactNode
    href?: string
    title: string
    thumbnail: string
    id?: string
    width: number
    height: number
}

export const GridItem = ({
    children,
    href,
    title,
    thumbnail,
    width,
    height
}: props) => {
    return (
        <Box w="100%" textAlign="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                    blurDataURL={thumbnail}
                    width={width}
                    height={height}
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export const ProjectsGridItem = ({
    children,
    id,
    title,
    thumbnail,
    width,
    height
}: props) => {
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={`/projects/${id}`} prefetch={true}>
                <LinkBox cursor="pointer">
                    <Image
                        src={thumbnail}
                        alt={title}
                        className="grid-item-thumbnail"
                        placeholder="blur"
                        blurDataURL={thumbnail}
                        width={width}
                        height={height}
                    />
                    <LinkOverlay href={`/projects/${id}`}>
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{children}</Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => {
    return (
        <Global
            styles={`
        .grid-item-thumbnail{
              border-radius: 12px;
        }
      `}
        />
    )
}
