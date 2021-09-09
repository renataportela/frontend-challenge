import React from 'react'

import { Text } from '/components/ui'

function ProductCardDetailText({ children, ...props }) {
  return <Text size="3" color="grey500" {...props}>{children}</Text>
}

export default ProductCardDetailText
