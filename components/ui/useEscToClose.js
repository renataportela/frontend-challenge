
import { useEffect } from 'react'

import { isServer } from '/helpers'

function useEscToClose(open, onClose){
  useEffect(() => {
    if (isServer || !open) return;
    
    const handleEsc = e => e.key === 'Escape' && onClose()

    document.addEventListener('keyup', handleEsc)

    return () => {
      document.removeEventListener('keyup', handleEsc)
    }
  }, [open, onClose])
}

export default useEscToClose