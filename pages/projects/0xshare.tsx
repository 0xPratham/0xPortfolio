import { Container, Badge, Link, ListItem, List } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Para from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const AnonymousShare = () => {
    return (
        <Layout title="0xShare">
            <Container>
                <Title>
                    0xShare <Badge>2022</Badge>
                </Title>
                <Para>
                    A anonymous file sharing service where people upload and
                    share any file with anyone and the file will exist on the
                    server for only 30min and fully working subscription.
                </Para>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>WEBSITE</Meta>
                        <Link href="https://0xshare.vercel.app" target="_blank">
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>NextJS, Firebase, Typescript, Stripe</span>
                    </ListItem>
                    <ListItem>
                        <Meta>SOURCE</Meta>
                        <Link
                            href="https://github.com/0xPratham/0xShare"
                            target="_blank"
                        >
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage
                    src="/images/projects/0xshare/0xshare-home.png"
                    alt="0xshare HomePage"
                />
                <ProjectImage
                    src="/images/projects/0xshare/0xshare-pricing.png"
                    alt="0xshare Pricing"
                />
                <ProjectImage
                    src="/images/projects/0xshare/0xshare-checkout.png"
                    alt="0xshare Checkout"
                />
            </Container>
        </Layout>
    )
}

export default AnonymousShare
