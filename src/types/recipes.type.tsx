import React from 'react'

type Recipe = {
  id: number
  title: string
  imageUrl: string
  timeToPrepare: string
  portions: number
  ingredients: object
  preparationMethod: object
  categories: object
}

export default Recipe
