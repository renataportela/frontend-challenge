import React from 'react'

import { Layout } from '/components/layout'

function HomePage() {
  return <>Welcome to Next.js!</>
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
