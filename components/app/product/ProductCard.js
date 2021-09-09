import React from 'react'
import styled from '@emotion/styled'

import { Box, Button, Text } from '/components/ui'
import { colors, spacing } from '/tokens'

import DetailText from './ProductCardDetailText'
import CardImage from './ProductCardImage'
import Price from './ProductCardPrice'
import ReviewStars from './ReviewStars'

function ProductCard({ productId, shortName, image, price, originalPrice, packageContent, review }) {
  return (
    <Container centered wrap="wrap">
      <CardImage image={image} alt={shortName} />
      <Box direction="column" full padding="4">
        <Text as="h4" size="5" mb="3">{shortName}</Text>
        <Detail text="Price">
          <Price price={price} originalPrice={originalPrice} />
        </Detail>
        <Detail text="Package">
          <DetailText>{packageContent}</DetailText>
        </Detail>
        <Detail text="Review">
          <ReviewStars review={review} />
        </Detail>
        <Button>Add product</Button>
      </Box>
    </Container>
  )
}

function Detail({ text, children }) {
  return (
    <Box justify="space-between" alignItems="center" style={{ marginBottom: spacing.t4 }}>
      <DetailText>{text}</DetailText>
      {children}
    </Box>
  )
}

const Container = styled(Box)`
  max-width: 567px;
  margin-bottom: ${spacing.t4};
  background-color: ${colors.grey100};
`

export default ProductCard
