import React from 'react'
import styled from '@emotion/styled'
import { Container } from 'react-grid-system'

import { CartButton } from '/components/app/cart'

import Logo from './Logo'
import MenuBar from './MenuBar'

function Header() {
  return (
    <MenuBar>
      <InnerContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <CartButton />
      </InnerContainer>
    </MenuBar>
  )
}

const InnerContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: row;
`

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

export default Header
