import React from 'react'
import { Row, Col } from 'react-grid-system'

import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <Row>
      {products.map(product => (
        <Col xs={12} md={6} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductList