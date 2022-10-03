import Redis from 'ioredis'
import { RateLimitScript } from './rate_limit_script'

const url = process.env.REDIS_URL ? process.env.REDIS_URL : ''

const client = new Redis(url)

export const check = async (key: string): Promise<{ allowed: boolean }> => {
    const rate = 1
    const capacity = 6
    const now = Math.floor(new Date().getTime() / 1000)
    const requested = 3
    const keys = [`${key}.tokens`, `${key}.timestamp`]
    const args = [rate, capacity, now, requested]

    const allowed: Array<any> | any = await client.eval(
        RateLimitScript,
        keys.length,
        ...keys,
        ...args
    )

    return { allowed: allowed[0] === 1 }
}

export const EmailExist = async (email: string) => {
    try {
        const exist = await client.exists(email.toString().toLowerCase().trim())
        if (exist !== 1) {
            return false
        } else {
            return true
        }
    } catch (e) {
        console.log(e)
        return 'error'
    }
}

export const SaveContactInfo = async (
    name: string,
    email: string,
    message: string
) => {
    try {
        const contactObj = {
            name: name.toString().trim(),
            email: email.toString().toLowerCase().trim(),
            message: message.toString().trim()
        }
        const saved = await client.set(
            email.toString().toLowerCase().trim(),
            JSON.stringify(contactObj),
            'EX',
            2592000
        )
        if (saved) {
            return true
        } else {
            return false
        }
    } catch (e) {
        console.log(e)
        return 'error'
    }
}
