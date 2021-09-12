import React from 'react'
import { useUpdateAtom } from 'jotai/utils'

import { Button } from '/components/ui'
import { addToCartAtom, isMiniCartOpenAtom } from '/store'

function ProductCardAddToCartButton({ product }) {
  const addToCart = useUpdateAtom(addToCartAtom)
  const setIsOpen = useUpdateAtom(isMiniCartOpenAtom)

  const onClick = e => {
    e.stopPropagation()
    setIsOpen(true)
    addToCart(product)
  }

  return (
    <Button onClick={onClick}>Add product</Button>
  )
}

export default ProductCardAddToCartButton
