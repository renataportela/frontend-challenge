import Document, { Html, Head, Main, NextScript } from 'next/document'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

import { fontFamily, fontSize } from '/tokens'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/Font/AzoSans/stylesheet.css" rel="stylesheet" />
        </Head>
        <body>
          <Global styles={css`
            ${emotionReset}

            body {
              font-family: ${fontFamily.default};
            }
          `} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



export default MyDocument