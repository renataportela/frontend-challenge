import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'

import {
  colors,
  fontFamily,
  fontSize,
  lineHeight as lineHeightTokens,
  spacing,
} from "/tokens";

const typographyStyles = ({
  color = 'currentColor',
  family = fontFamily.default,
  lineThrough = false,
  size,
  lineHeight = size,
  mb,
  weight = 'normal'
}) =>
  css`
    color: ${colors[color] || color};
    font-family: ${family};
    font-size: ${fontSize[`t${size}`] || "inherit"};
    font-weight: ${weight};
    line-height: ${lineHeightTokens[`t${lineHeight}`] || "inherit"};
    margin-bottom: ${spacing[`t${mb}`] || 0};
    text-decoration: ${lineThrough ? 'line-through' : 'none'};
  `;

const Text = styled('span', {
  shouldForwardProp: prop =>
    isPropValid(prop) && !['as', 'size', 'weight'].includes(prop)
})(typographyStyles)

export default Text
