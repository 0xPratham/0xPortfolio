import { NextApiRequest, NextApiResponse } from 'next'
import { check, EmailExist, SaveContactInfo } from '../../lib/redis'
import requestIp from 'request-ip'
import { validateSchema } from '../../lib/validationSchema'
import { sendEmail, createEmailBody } from '../../lib/nodemailer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'POST') {
            if (!req.body.name || !req.body.email || !req.body.message) {
                return res.status(204).json({
                    status: false,
                    message: 'All fields required'
                })
            }
            const ip = requestIp.getClientIp(req)
            if (ip) {
                const { allowed } = await check(ip.toString())
                if (allowed) {
                    const valid = await validateSchema(req)
                    if (valid !== true) {
                        return res.status(400).json({
                            status: false,
                            message: valid
                        })
                    }
                    const email_exist = await EmailExist(req.body.email)
                    if (email_exist === 'error' || email_exist) {
                        return res.status(409).json({
                            status: false,
                            message: 'Email already exist'
                        })
                    }
                    const saved = await SaveContactInfo(
                        req.body.name,
                        req.body.email,
                        req.body.message
                    )
                    if (!saved) {
                        return res.status(500).send({
                            status: false,
                            message: 'Something went wrong. Please try again.'
                        })
                    }
                    const html = createEmailBody(
                        req.body.name,
                        req.body.email,
                        req.body.message
                    )
                    const email_send = await sendEmail(html)
                    if (email_send.success) {
                        return res.status(200).json({
                            status: true,
                            message:
                                'Thank you for contacting me. I will reply to you ASAP'
                        })
                    } else {
                        return res.status(500).send({
                            status: false,
                            message: 'Something went wrong. Please try again.'
                        })
                    }
                } else {
                    return res.status(503).json({
                        status: false,
                        message: 'Slow down...'
                    })
                }
            }
        } else {
            return res.status(405).json({
                status: false,
                message: 'Method not allowed'
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            status: false,
            message: 'Something went wrong. Please try again.'
        })
    }
}
