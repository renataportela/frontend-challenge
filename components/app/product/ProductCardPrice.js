import React from 'react'
import { Hidden } from 'react-grid-system'

import { Text } from '/components/ui'
import { spacing } from '/tokens'

import DetailText from './ProductCardDetailText'

function ProductCardPrice({ price, originalPrice }) {
  return (
    <div>
      {!!originalPrice && (
        <Hidden xs>
          <DetailText
            lineThrough
            style={{ marginRight: spacing.t3 }}
          >
            {originalPrice}Є
          </DetailText>
        </Hidden>        
      )}
      <Text color="primary" size="3" weight="bold">
        {price}Є
      </Text>
    </div>
  )
}

export default ProductCardPrice
