import React from 'react'
import styled from '@emotion/styled'

import { Box } from '/components/ui'
import { spacing } from '/tokens'

function RowBetween({ children, alignItems = 'center' }) {
  return (
    <RowStyle justify="space-between" alignItems={alignItems}>      
      {children}
    </RowStyle>
  )
}

const RowStyle = styled(Box)`
  margin-bottom: ${spacing.t4}
`

export default RowBetween
