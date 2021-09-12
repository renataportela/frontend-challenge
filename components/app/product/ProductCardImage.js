import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { Box } from '/components/ui'

function ProductCardImage({ image, alt = 'Photo' }) {
  return (
    <Container centered>
      <StyledImg src={image} alt={alt} width="480" height="480" />
    </Container>
  )
}

const Container = styled(Box)`
  height: 185px;
  position: relative;
  overflow: hidden;
  width: 148px;
  max-width: 148px;

  @media (min-width: 576px) {
    width: 220px;
    max-width: 220px;
  }
`

const StyledImg = styled(Image)`
  height: 100%;
  width: auto;
`

export default ProductCardImage
