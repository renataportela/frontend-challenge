import React from 'react'

import { ProductCard } from '/components/app/product'
import { Layout } from '/components/layout'
import { Heading, Text } from '/components/ui'

function HomePage() {
  return (
    <>
      <Heading size="3">Store</Heading>
      <Text as="p" mb="7">
        Explore our vast selection of premium products.
      </Text>

      <ProductCard
        productId="1"
        shortName="Barkyn Salmon Crisps"
        image="/PNGs/food.png"
        price="2,24"
        originalPrice="2,29"
        review={5}
      />
    </>
  )
}

export default HomePage

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
