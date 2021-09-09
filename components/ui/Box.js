import styled from '@emotion/styled'

import { spacing } from '/tokens'

const Box = styled.div(
  ({
    centered = false,
    direction = null,
    full = false,
    justify = null,
    alignItems = null,
    wrap = null,
    padding = null,
  }) => ({
    display: 'flex',
    flex: full ? 1 : null,
    flexDirection: direction,
    justifyContent: centered ? 'center' : justify,
    alignItems: centered ? 'center' : alignItems,
    padding: padding ? spacing[`t${padding}`] : null,
    wrap,
  })
)

export default Box
