import styled from '@emotion/styled'

import { Box } from '/components/ui'
import { shadow, spacing } from '/tokens'

const MenuBar = styled(Box)`
  align-items: center;  
  box-shadow: ${shadow.md};
  margin-bottom: ${spacing.t6};
  height: 64px;
  align-items: 'center';
`

export default MenuBar