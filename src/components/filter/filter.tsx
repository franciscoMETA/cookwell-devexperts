import React, { ChangeEvent, useState } from 'react'
import Ingredient from '../../types/filter.type'
import filterStyles from './filter.styles'

import { RiErrorWarningFill } from 'react-icons/ri'

type filterProps = {
  data: Ingredient[]
  onFilter: any
}

const Filter = ({ data, onFilter }: filterProps) => {
  const [showResults, setShowResult] = useState(false)
  const [filteredData, setFilteredData] = useState(data)

  const classes = filterStyles()

  const onStartFiltering = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value !== '' ? filterData(e.target.value) : setShowResult(false)
  }

  const filterData = (inputValue: string) => {
    setFilteredData(
      data.filter((data) =>
        data.displayName.toLowerCase().includes(inputValue.toLocaleLowerCase())
      )
    )
    setShowResult(true)
  }

  const filterDataHandler = (e: any) => {
    onFilter({ label: e.target.name, status: e.target.checked })
  }

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        onChange={onStartFiltering}
        placeholder="Filter Ingredients"
      ></input>
      <ul
        className={classes.searchList}
        style={{ display: `${!showResults ? 'none' : ''}` }}
      >
        <a
          style={{ fontSize: '.6rem', textAlign: 'center', color: 'grey' }}
          onClick={() => onFilter({})}
        >
          clear current selection
        </a>
        {filteredData.length === 0 && (
          <p style={{ fontSize: '.6rem', color: 'red' }}>
            <span>
              <RiErrorWarningFill />
            </span>
            Could not find nothing with the text you introduce
          </p>
        )}
        {filteredData.map((element: any) => {
          return (
            <li id={`${element.id}`}>
              <input
                type="checkbox"
                id={element.id}
                name={element.name}
                value={element.value}
                onClick={filterDataHandler}
              />
              <label htmlFor={element.id}>{element.displayName}</label>
              <br></br>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filter
