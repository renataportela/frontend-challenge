import styled from '@emotion/styled'

import { colors, spacing } from '/tokens'

import { typographyStyles } from './Text'

const ButtonStyle = styled.button`
  ${typographyStyles}
  border-radius: 20px;
  padding: ${spacing.t3};
  text-align: center;
  background-color: ${props => colors[props.bgColor]};
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => colors[`${props.bgColor}600`]};
  }
`

function Button({ children, color = 'primary', ...props }) {
  return (
    <ButtonStyle bgColor={color} color="white">
      {children}
    </ButtonStyle>
  )
}

export default Button