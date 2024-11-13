import { NextResponse } from 'next/server'
import { ValidationError } from 'yup'
import { ContactUsSchema } from '../../../lib/validationSchema'

const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const ip = (
            request.headers.get('x-forwarded-for') ?? '127.0.0.1'
        ).split(',')[0]

        const captchaToken = body.captchaToken

        if (!captchaToken) {
            return NextResponse.json(
                {
                    status: false,
                    message: 'Captcha token required'
                },
                {
                    status: 400
                }
            )
        }

        const result = await fetch(url, {
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY as string,
                response: captchaToken,
                remoteip: ip
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const outcome = await result.json()

        if (!outcome.success) {
            return NextResponse.json(
                {
                    status: false,
                    message: 'Captcha verification failed'
                },
                {
                    status: 400
                }
            )
        }

        const name = body.name
        const email = body.email
        const message = body.message

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    status: false,
                    message: 'All fields required'
                },
                {
                    status: 400
                }
            )
        }

        try {
            await ContactUsSchema.validate(
                {
                    name,
                    email,
                    message
                },
                { strict: true }
            )
        } catch (e) {
            if (e instanceof ValidationError) {
                return NextResponse.json(
                    {
                        status: false,
                        message: e.message
                    },
                    {
                        status: 400
                    }
                )
            }
            return NextResponse.json(
                {
                    status: false,
                    message: 'Validation failed'
                },
                {
                    status: 400
                }
            )
        }

        try {
            await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
                })
            })
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    status: false,
                    message: 'Something went wrong. Please try again.'
                },
                {
                    status: 500
                }
            )
        }

        return NextResponse.json(
            {
                status: true,
                message: 'Message sent successfully'
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                status: false,
                message: 'Something went wrong. Please try again.'
            },
            {
                status: 500
            }
        )
    }
}
