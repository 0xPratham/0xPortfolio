import * as Yup from 'yup'
import { NextApiRequest } from 'next'

export const schema = Yup.object({
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

export const validateSchema = async (req: NextApiRequest) => {
    try {
        await schema.validate(req.body)
        return true
    } catch (e: any) {
        console.log(e)
        return e?.errors[0]
    }
}
