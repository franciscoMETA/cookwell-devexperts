import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import request from './api/request'
import Recipe from './types/recipes.type'

import Error from './components/error/error'
import TopBarNav from './ui/topBarNav/topBarNav'
import Filter from './components/filter/filter'
import Logo from './ui/logo/logo'
import Revenues from './components/revenues/revenues'
import FilterData from './types/filter.type'
import AppMainStyles from './App.styles'
import ModalRoot from './ui/modals/modal'
import RevenueModalBody from './ui/modals/revenue/revenue'
import { StageSpinner } from 'react-spinners-kit'

function App() {
  const [error, setError] = useState({
    status: false,
    title: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [ingredients, setIngredients] = useState<FilterData[]>([])
  const [preparationMethod, setPreparationMethod] = useState<any>()
  const classes = AppMainStyles()
  let recipesFiltered: Recipe[] = []

  const openModalHandler = (
    e: React.SyntheticEvent<EventTarget>,
    revenue: string
  ) => {
    const { preparationMethod } = recipes.filter(
      (recipe) => recipe.title === revenue
    )[0]

    setPreparationMethod(preparationMethod)
    setIsOpen(!isOpen)
    document.querySelector('body')!.style.overflow = 'hidden'
  }

  const onCloseModalHandle = () => {
    setIsOpen(!isOpen)
    document.querySelector('body')!.style.overflow = 'visible'
  }

  const onFilterHandler = (filter: any) => {
    console.log(filter)
    console.log(Object.keys(filter).length === 0)

    if (Object.keys(filter).length === 0) {
      setFilteredRecipes(recipes)
    }

    if (Object.keys(filter).length !== 0) {
      filter.status
        ? setFilteredRecipes(
            filteredRecipes.filter((recipe: any) =>
              JSON.stringify(recipe.ingredients).includes(filter.label)
            )
          )
        : setFilteredRecipes(
            recipes.filter((recipe: any) =>
              JSON.stringify(recipe.ingredients).includes(filter.label)
            )
          )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await request({
          method: 'GET',
          url: 'https://api.jsonbin.io/v3/b/62d56dbd5ecb581b56c3e44d',
          params: '',
        })

        if (response.status !== 200) {
          throw Error
        }
        setRecipes(response.data.record.recipes)
        setFilteredRecipes(response.data.record.recipes)
        setIngredients(response.data.record.ingredients)
        setIsLoading(false)
      } catch (error: any) {
        setError({
          status: true,
          title: 'Error fetching recipes list, due to',
          message: `${error.response.data.message}`,
        })
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {isOpen && (
        <ModalRoot onCloseHandler={onCloseModalHandle}>
          <RevenueModalBody steps={preparationMethod} />
        </ModalRoot>
      )}
      {error.status && <Error error={error} />}
      <header className={classes.header}>
        <TopBarNav>
          <Logo />
          <Filter data={ingredients} onFilter={onFilterHandler} />
        </TopBarNav>
      </header>
      {isLoading && (
        <section className={classes.recipesLoader}>
          <StageSpinner size={60} color="#000" />
        </section>
      )}
      {!isLoading && !error.status && (
        <section className={classes.recipesContainer}>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <p>
                    Ups, this restaurant area is only for employees. Please,
                    return back!
                  </p>
                }
              />
              <Route
                path="/"
                element={
                  <Revenues
                    revenues={filteredRecipes}
                    modalHandler={openModalHandler}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </section>
      )}
      <footer className={classes.footer}>
        <div>
          <p>
            Please don't try these recipes at home. We hope that they will
            inspire you yo cook more, but consider their main idea is your
            coding task for Devexperts.
          </p>
          <p>Copyright Ⓒ 2022. All right reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
