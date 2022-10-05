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
import { schema } from '../lib/validationSchema'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'

const Posts = () => {
    const toast = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={schema}
            onSubmit={async (values, actions) => {
                try {
                    if (!process.env.NEXT_PUBLIC_URL) return
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
                                message: values.message.toString().trim()
                            })
                        }
                    )
                    const response = await res.json()
                    if (response.status) {
                        setLoading(false)
                        toast({
                            title: 'Contact save.',
                            description: response.message,
                            status: 'success',
                            duration: 5000,
                            isClosable: true
                        })
                    } else {
                        setLoading(false)
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
                <Layout title="Contact">
                    <Container mb="16">
                        <form method="POST" onSubmit={formik.handleSubmit}>
                            <Heading as="h3" fontSize={20} mb={4}>
                                Get in Touch
                            </Heading>
                            <FormControl
                                mb={2}
                                isInvalid={
                                    formik.errors.name && formik.touched.name
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
                                    formik.errors.email && formik.touched.email
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
                            <Button
                                isLoading={loading}
                                colorScheme="teal"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </Container>
                </Layout>
            )}
        </Formik>
    )
}

export default Posts
