import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { Box } from '/components/ui'
import { colors, spacing } from '/tokens'

function MiniCartProductImage({ image, alt = 'Photo', title = alt }) {
  return (
    <Container centered>
      <StyledImg src={image} alt={alt} title={title} width="64" height="64" />
    </Container>
  )
}

const Container = styled(Box)`
  height: 64px;
  position: relative;
  overflow: hidden;
  width: 64px;
  max-width: 64px;
  background-color: ${colors.grey200};
  margin-right: ${spacing.t4};
`

const StyledImg = styled(Image)`
  height: 100%;
  width: auto;
`

export default MiniCartProductImage
