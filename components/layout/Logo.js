import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  return (
    <Link href="/">
      <Image src="/SVGs/logo.svg" alt="Barkyn" width="120" height="32" />
    </Link>
  )
}

export default Logo
