'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import classes from './nav-link.module.css'

const NavLink = ({ url, children }) => {
  const path = usePathname()
  return (
    <Link href={url} className={path === url ? classes.active : ''}>
      {children}
    </Link>
  )
}

export default NavLink
