import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useUpdateAtom } from 'jotai/utils'

import { removeFromCartAtom } from '/store'

function MiniCartRemoveButton({ productId }) {
  const removeFromCart = useUpdateAtom(removeFromCartAtom)

  const onClick = e => {
    e.stopPropagation()
    removeFromCart(productId)
  }

  return (
    <Container role="button" onClick={onClick}>
      <Image src="/SVGs/delete.svg" alt="Delete" title="Remove from cart" width="16" height="20" />
    </Container>
  )
}

const Container = styled.span`
  cursor: pointer;
`

export default MiniCartRemoveButton
