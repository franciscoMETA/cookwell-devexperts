import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import CardStyles from './card.styles'

type cardProps = {
  children: ReactNode
}

const Card = ({ children }: cardProps) => {
  const classes = CardStyles()

  return <article className={classes.card}>{children}</article>
}

export default Card
