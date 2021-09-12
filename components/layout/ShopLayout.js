import React from 'react'
import { Container } from 'react-grid-system'

import { MiniCart } from '/components/app/cart'

import Header from './Header'

function ShopLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <MiniCart />
    </>
  )
}

export default ShopLayout
