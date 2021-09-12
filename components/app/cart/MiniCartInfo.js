import React from 'react'
import { useAtomValue } from 'jotai/utils'

import { Button, RowBetween, Text } from '/components/ui'
import { cartAtom, totalCartAtom } from '/store'

import MiniCartProduct from './MiniCartProduct'

function MiniCartInfo() {
  const cart = useAtomValue(cartAtom)
  const totalCart = useAtomValue(totalCartAtom)

  if (cart.length === 0) {
    return <Text align="center">Your cart is empty.</Text>
  }

  return (
    <>
      {cart.map(product => (
        <MiniCartProduct key={product.id} product={product} />
      ))}
      <RowBetween>
        <Text size="3">Subtotal</Text>
        <Text size="4" weight="bold" align="right">{totalCart}</Text>
      </RowBetween>
      <Button full>Go to checkout</Button>
    </>
  )
}

export default MiniCartInfo