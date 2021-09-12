import React from 'react'
import styled from '@emotion/styled'

import { colors } from '/tokens'
import { typographyStyles } from './Text'

function Button({ children, color = 'primary', onClick, full = false }) {
  return (
    <ButtonStyle bgColor={color} color="white" onClick={onClick} full={full}>
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  ${typographyStyles}
  border-radius: 16px;
  height: 40px;
  text-align: center;
  background-color: ${props => colors[props.bgColor]};
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.full ? '100%' : 'auto'};

  &:hover {
    background-color: ${props => colors[`${props.bgColor}600`]};
  }
`

export default Button