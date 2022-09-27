import React from 'react'
import Recipe from '../../types/recipes.type'

import Card from '../../ui/card/card'
import Revenue from '../revenue/revenue'

type revenuesProps = {
  revenues: Recipe[]
  modalHandler: any
}

const Revenues = ({ revenues, modalHandler }: revenuesProps) => {
  const handleExpandRevenue = (e: React.SyntheticEvent<HTMLElement>) => {
    modalHandler(e, e.currentTarget.getAttribute('data-title'))
  }

  return (
    <>
      {revenues.map((revenue: Recipe) => (
        <Card key={revenue.id}>
          <Revenue
            id={parseInt(`${Math.floor(Math.random() * 101)}- ${revenue.id}`)}
            title={revenue.title}
            time={revenue.timeToPrepare}
            imgUrl={revenue.imageUrl}
            ingredients={revenue.ingredients}
            onExpand={handleExpandRevenue}
          />
        </Card>
      ))}
    </>
  )
}

export default Revenues
