import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoImg from '@/assets/logo.png'

import classes from './main-header.module.css'
import MainHeaderBackground from './main-header-background'

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
              <Link href='/meals'>Browse Meals</Link>
            </li>
            <li>
              <Link href='/community'>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
