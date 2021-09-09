import React from 'react'
import styled from '@emotion/styled'
import { Container } from 'react-grid-system'

import { shadow, spacing } from '/tokens'
import Logo from './Logo'

function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        cart
      </InnerContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;  
  box-shadow: ${shadow.md};
  padding: ${spacing.px.t3}px;
  margin-bottom: ${spacing.px.t3}px;
`

const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export default Header
