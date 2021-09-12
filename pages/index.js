import React from 'react'
// import { useHydrateAtoms } from 'jotai/utils'

import { ProductList } from '/components/app/product'
import { ShopLayout } from '/components/layout'
import { Heading, Text } from '/components/ui'

function HomePage({ products }) {
  return (
    <>
      <Heading size="3">Store</Heading>
      <Text as="p" mb="7">
        Explore our vast selection of premium products.
      </Text>

      <ProductList products={products} />
    </>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <ShopLayout>
      {page}
    </ShopLayout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json()

  return {
    props: { 
      products: products || [] 
    },
  }
}

export default HomePage
