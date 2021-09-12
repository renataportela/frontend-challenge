import React from 'react'
import Image from 'next/image'
import { useAtomValue, useUpdateAtom } from 'jotai/utils'

import { Box, Text } from '/components/ui'
import { isMiniCartOpenAtom, countCartItemsAtom } from '/store'

function CartButton() {
  const count = useAtomValue(countCartItemsAtom)
  const setIsOpen = useUpdateAtom(isMiniCartOpenAtom)

  const onClick = e => {
    e.stopPropagation()
    setIsOpen(true)
  }

  return (
    <Box alignItems="center" style={{ cursor: 'pointer' }} onClick={onClick}>
      <Text size="2" weight="bold">
        {count}
      </Text>
      <Image
        src={`/SVGs/${count === 0 ? "cart_empty" : "cart_with_items"}.svg`}
        alt="Cart"
        width="20"
        height="24"
      />
    </Box>
  )
}

export default CartButton
