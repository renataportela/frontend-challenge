import React from 'react'
import styled from '@emotion/styled'

import { colors, shadow, spacing } from '/tokens'
import useCloseOnClickOutside from './useCloseOnClickOutside'
import useEscToClose from './useEscToClose'

function Drawer({ children, open, onClose, ...props }) {
  const paperRef = React.useRef()

  useCloseOnClickOutside(paperRef, open, onClose)
  useEscToClose(open, onClose)

  return (
    <Paper ref={paperRef} className={open ? 'show' : ''} {...props}>
      {children}
    </Paper>
  )
}

const Paper = styled.div`
  position: relative;
  box-shadow: none;
  background-color: ${colors.background};  
  text-align: left;
  position: fixed;  
  z-index: 800;
  will-change: transform;
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow ease;
  width: 90%;
  max-width: 400px;
  height: 100%;
  transform: translate3d(100%,0,0);
  top: 0;
  right: 0;

  &.show {
    transform: none;
    box-shadow: ${shadow.sm};
  }
`

export default Drawer
