import React from 'react'
import styled from '@emotion/styled'
import { Hidden } from 'react-grid-system'

import { Box, RowBetween, Text } from '/components/ui'
import { colors, spacing } from '/tokens'

import AddToCartButton from './ProductCardAddToCartButton'
import DetailText from './ProductCardDetailText'
import CardImage from './ProductCardImage'
import Price from './ProductCardPrice'
import ReviewStars from './ReviewStars'

function ProductCard({ product }) {
  if (!product) return null

  const { shortName, image, price, originalPrice, packageContent, review } = product

  return (
    <Container centered>
      <CardImage image={image} alt={shortName} />
      <Box direction="column" full padding="4">
        <Text as="h4" size="5" mb="3">{shortName}</Text>
        <RowBetween>
          <Hidden xs>
            <DetailText>Price</DetailText>
          </Hidden>
          <Price price={price} originalPrice={originalPrice} />
        </RowBetween>
        <RowBetween>
          <DetailText>Package</DetailText>
          <DetailText>{packageContent}</DetailText>
        </RowBetween>
        <RowBetween>
          <DetailText>Review</DetailText>
          <ReviewStars review={review} />
        </RowBetween>
        <AddToCartButton product={product} />        
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  margin-bottom: ${spacing.t4};
  background-color: ${colors.grey100};
  width: 100%;
`

export default ProductCard
