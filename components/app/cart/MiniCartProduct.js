import React from 'react'

import { Box, Divider, RowBetween, Text } from '/components/ui'

import MiniCartProductImage from './MiniCartProductImage'
import MiniCartRemoveButton from './MiniCartRemoveButton'

function MiniCartProduct({ product }) {
  return (
    <>
      <Box>
        <MiniCartProductImage image={product.image} alt={product.shortName} />
        <Box direction="column" full>
          <RowBetween>
            <Text weight="bold">{product.shortName}</Text>
            <MiniCartRemoveButton productId={product.id} />
          </RowBetween>
          <RowBetween>
            <DetailText>Price</DetailText>
            <DetailText>{product.price}</DetailText>
          </RowBetween>
          <RowBetween>
            <DetailText>Package</DetailText>
            <DetailText>{product.packageContent}</DetailText>
          </RowBetween>
          <RowBetween>
            <DetailText>Quantity</DetailText>
            <DetailText>{product.quantity}</DetailText>
          </RowBetween>
        </Box>
      </Box>
      <Divider />
    </>
  )
}

function DetailText({ children }) {
  return <Text size="3" color="grey500">{children}</Text>
}

export default MiniCartProduct
