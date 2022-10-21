import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD
    },
    service: 'gmail'
})

export const sendEmail = async (
    html: string
): Promise<{ success: boolean }> => {
    try {
        const email = await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: 'pentesterpratham@gmail.com',
            subject: 'Someone wants to contact you!',
            html
        })
        if (email.accepted) {
            return { success: true }
        } else {
            return { success: false }
        }
    } catch (e) {
        console.log(e)
        return { success: false }
    }
}

export const createEmailBody = (
    name: string,
    email: string,
    message: string
): string => {
    const body = `<p><strong>Name: </strong> <b>${name}</b></p>
                  <p><strong>Email: </strong> <b>${email}</b></p>
                  <p><strong>Message: </strong> <b>${message}</b></p>`
    return body
}
