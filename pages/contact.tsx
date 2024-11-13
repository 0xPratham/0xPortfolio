import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Textarea,
    Button
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { ContactUsSchema } from '../lib/validationSchema'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import Head from 'next/head'
import Turnstile, { useTurnstile } from 'react-turnstile'

const Posts = () => {
    const toast = useToast()
    const turnstile = useTurnstile()
    const [loading, setLoading] = useState<boolean>(false)
    const [captcha, setCaptcha] = useState<string>('')

    return (
        <>
            <Head>
                <title>Contact - 0xPratham</title>
            </Head>

            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactUsSchema}
                onSubmit={async (values, actions) => {
                    try {
                        if (!process.env.NEXT_PUBLIC_URL) return
                        if (!captcha) {
                            toast({
                                title: 'Captcha not verified.',
                                description: 'Please verify captcha.',
                                status: 'error',
                                duration: 5000,
                                isClosable: true
                            })
                            return
                        }
                        setLoading(true)
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_URL}/api/contact`,
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: values.name.toString().trim(),
                                    email: values.email
                                        .toString()
                                        .toLowerCase()
                                        .trim(),
                                    message: values.message.toString().trim(),
                                    captchaToken: captcha
                                })
                            }
                        )
                        const response = await res.json()
                        if (response.status) {
                            setLoading(false)
                            turnstile.reset()
                            toast({
                                title: 'Contact save.',
                                description: response.message,
                                status: 'success',
                                duration: 5000,
                                isClosable: true
                            })
                        } else {
                            setLoading(false)
                            turnstile.reset()
                            toast({
                                title: 'Error from server.',
                                description: response.message,
                                status: 'error',
                                duration: 7000,
                                isClosable: true
                            })
                        }
                        actions.resetForm()
                        return
                    } catch {
                        setLoading(false)
                        return toast({
                            title: 'Something wents wrong.',
                            description: 'Try again later',
                            status: 'error',
                            duration: 5000,
                            isClosable: true
                        })
                    }
                }}
            >
                {formik => (
                    <Layout>
                        <Container mb="16">
                            <form method="POST" onSubmit={formik.handleSubmit}>
                                <Heading as="h3" fontSize={20} mb={4}>
                                    Get in Touch
                                </Heading>
                                <FormControl
                                    mb={2}
                                    isInvalid={
                                        formik.errors.name &&
                                        formik.touched.name
                                            ? true
                                            : false
                                    }
                                >
                                    <FormLabel>Name</FormLabel>
                                    <Field
                                        as={Input}
                                        name="name"
                                        type="text"
                                        placeholder="CEO"
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.name}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    mb={2}
                                    isInvalid={
                                        formik.errors.email &&
                                        formik.touched.email
                                            ? true
                                            : false
                                    }
                                >
                                    <FormLabel>Email address</FormLabel>
                                    <Field
                                        as={Input}
                                        name="email"
                                        type="email"
                                        placeholder="ceo@company.com"
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.email}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    mb={4}
                                    isInvalid={
                                        formik.errors.message &&
                                        formik.touched.message
                                            ? true
                                            : false
                                    }
                                >
                                    <FormLabel>Message</FormLabel>
                                    <Field
                                        as={Textarea}
                                        name="message"
                                        placeholder="I want to hire you..."
                                    />
                                    <FormErrorMessage>
                                        {formik.errors.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Turnstile
                                    sitekey={
                                        process.env
                                            .NEXT_PUBLIC_TURNSTILE_SITE_KEY as string
                                    }
                                    onVerify={token => {
                                        setCaptcha(token)
                                    }}
                                    onError={() => {
                                        setCaptcha('')
                                    }}
                                />
                                <Button
                                    isLoading={loading}
                                    colorScheme="teal"
                                    type="submit"
                                    mt={2}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Container>
                    </Layout>
                )}
            </Formik>
        </>
    )
}

export default Posts
