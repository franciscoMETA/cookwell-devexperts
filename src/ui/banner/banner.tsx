import React, { ReactElement, ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import { createUseStyles } from 'react-jss'
import BannerStyles from './banner.styles'

type bannerProps = {
  icon?: ReactNode
  type: string
  title: string
  message: string
}

const TopBanner = ({ icon, type, title, message }: bannerProps) => {
  const classes = BannerStyles()
  return (
    <div
      className={`${classes.bannerContainer} ${
        type === 'error' ? classes.error : classes.info
      }`}
    >
      <div>
        <span>{icon}</span>
      </div>
      <div className={classes.bannerMessage}>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
      <div>
        <span>
          <a onClick={() => console.log('I was clicked!')}>
            <MdClose />
          </a>
        </span>
      </div>
    </div>
  )
}

export default TopBanner
