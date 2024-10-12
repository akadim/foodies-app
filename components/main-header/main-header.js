import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image
            src={logoImg}
            alt='Foodies Logo'
            width={100}
            height={100}
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink url='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink url='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
