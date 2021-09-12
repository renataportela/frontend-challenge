import { useEffect } from 'react'

import { isServer } from '/helpers'

function useCloseOnClickOutside(elementRef, open, onClose) {
  useEffect(() => {
    if (isServer || !open || !elementRef.current) return;

    const handleClick = e => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [open, onClose, elementRef]);
}

export default useCloseOnClickOutside
