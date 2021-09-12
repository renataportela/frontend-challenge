import React from 'react'
import { useAtom } from 'jotai'

import { Box, Drawer } from '/components/ui'
import { isMiniCartOpenAtom } from '/store'

import MiniCartHeader from './MiniCartHeader'
import MiniCartInfo from './MiniCartInfo'

function MiniCart() {
  const [isOpen, setIsOpen] = useAtom(isMiniCartOpenAtom)
  
  const toggleMiniCart = () => setIsOpen(!isOpen)

  return (
    <Drawer open={isOpen} onClose={toggleMiniCart}>      
      <MiniCartHeader toggle={toggleMiniCart} />
      <Box full padding="4" direction="column">
        <MiniCartInfo />
      </Box>          
    </Drawer>
  )
}

export default MiniCart
