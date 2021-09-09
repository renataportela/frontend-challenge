import React from 'react'
import styled from '@emotion/styled'
import { Container } from 'react-grid-system'

import { CartButton } from '/components/app/cart'
import { shadow, spacing } from '/tokens'
import Logo from './Logo'

function Header() {
  return (
    <HeaderContainer>
      <InnerContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <CartButton />
      </InnerContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;  
  box-shadow: ${shadow.md};
  padding: ${spacing.t3};
  margin-bottom: ${spacing.t6};
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
