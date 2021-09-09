import React from 'react'
import Image from 'next/image'

import { Box, Text } from '/components/ui'

function CartButton() {
  // TODO: integration
  const count = 0

  return (
    <Box alignItems="center">
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
  );
}

export default CartButton
