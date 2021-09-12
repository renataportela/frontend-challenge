import React from 'react'
import styled from '@emotion/styled'
import { useAtomValue } from 'jotai/utils'

import { MenuBar } from '/components/layout'
import { Box, CloseButton, Text } from '/components/ui'
import { countCartItemsAtom } from '/store'
import { spacing } from '/tokens'

function MiniCartHeader({ toggle }) {
  const count = useAtomValue(countCartItemsAtom)

  return (
    <Header justify="space-between">
      <Text as="h3" size="4" weight="bold">Your Cart</Text>
      <Box justify="flex-end" alignItems="center">
        <TotalItems size="2">{count} {count === 1 ? 'item' : 'items'}</TotalItems>
        <CloseButton onClick={toggle} />
      </Box>
    </Header>
  )
}

const Header = styled(MenuBar)`
  padding-left: ${spacing.t3};
  padding-right: ${spacing.t3};
  margin-bottom: ${spacing.t5};  
`

const TotalItems = styled(Text)`
  margin-right: ${spacing.t3};
`

export default MiniCartHeader
