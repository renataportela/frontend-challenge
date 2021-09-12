import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { colors } from '/tokens'

function CloseButton({ onClick }) {
  return (
    <CloseButtonStyle onClick={onClick} title="Close">
      <Image src="/SVGs/close.svg" alt="Close" width="15" height="15" />
    </CloseButtonStyle>
  )
}

const CloseButtonStyle = styled.button`
  border: 0;
  height: 24px;
  width: 24px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.neutral};
  cursor: pointer;
`

export default CloseButton
