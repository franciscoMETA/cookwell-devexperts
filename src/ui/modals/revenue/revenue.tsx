import React from 'react'
import RevenueModalStyles from './revenue.style'

type revenueModalProps = {
  steps: any
}

const RevenueModalBody = ({ steps }: revenueModalProps) => {
  const classes = RevenueModalStyles()

  return (
    <>
      {steps.map((step: any) => {
        return (
          <article className={classes.stepContainer}>
            <span className={classes.stepDot}>{step.step}</span>
            <p>{step.text}</p>
          </article>
        )
      })}
    </>
  )
}

export default RevenueModalBody
