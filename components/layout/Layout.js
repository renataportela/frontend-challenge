import React from 'react'
import { Container } from 'react-grid-system'

import Header from './Header'

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default PageLayout
