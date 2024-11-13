import * as Yup from 'yup'

export const ContactUsSchema = Yup.object({
    name: Yup.string()
        .required('Name required')
        .min(3, 'Name is too short')
        .max(30, 'Name is too long'),
    email: Yup.string()
        .required('Email required')
        .email('Email is not correct')
        .max(100, 'Email is too long'),
    message: Yup.string()
        .required('Message required')
        .min(10, 'Message is too short')
        .max(500, 'Message is too long')
})
