import React from 'react'
import TopBarStyles from './topBarNav.style'

const TopBarNav = (props: any) => {
  const classes = TopBarStyles()

  return <nav className={classes.navContainer}>{props.children}</nav>
}

export default TopBarNav
