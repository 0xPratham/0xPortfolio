import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../lib/theme'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="icon"
                        type="image/svg+xml"
                        href="/favicon/favicon.svg"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/favicon/favicon.png"
                    />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
