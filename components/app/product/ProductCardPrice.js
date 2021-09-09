import React from 'react'

import { Text } from '/components/ui'
import { spacing } from '/tokens'

import DetailText from './ProductCardDetailText'

function ProductCardPrice({ price, originalPrice }) {
  return (
    <div>
      {!!originalPrice && (
        <DetailText
          lineThrough
          style={{ marginRight: spacing.t3 }}
        >
          {originalPrice}
        </DetailText>
      )}
      <Text color="primary" size="3" weight="bold">
        {price}
      </Text>
    </div>
  )
}

export default ProductCardPrice
