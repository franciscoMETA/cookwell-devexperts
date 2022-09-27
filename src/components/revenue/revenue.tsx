import React from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import revenueProps from '../../types/props/revenues.props'
import RevenueStyles from './revenue.styles'

const Revenue = ({
  id,
  title,
  time,
  imgUrl,
  ingredients,
  onExpand,
}: revenueProps) => {
  const classes = RevenueStyles()

  return (
    <>
      <div className={classes.cardHeader}>
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
      <div className={classes.cardBody}>
        <img src={imgUrl} alt={title} />
        <div className="revenueIngredients">
          <ul className={classes.ingredientsList}>
            {ingredients.map((ingredient: any, index: any) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
        </div>
      </div>
      <div className={classes.cardFooter}>
        <span>
          <a onClick={onExpand} data-id={id} data-title={title}>
            <IoOpenOutline />
          </a>
        </span>
      </div>
    </>
  )
}

export default Revenue
