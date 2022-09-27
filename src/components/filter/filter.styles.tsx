import React from 'react'
import { createUseStyles } from 'react-jss'

const filterStyles = createUseStyles({
  searchContainer: {
    '& input': {
      width: '16rem',
      backgroundColor: '#fff',
      padding: '.6rem .3rem',
      marginBottom: '.2rem',

      border: 'solid .1rem #b0b0b0',
      borderRadius: '.2rem',
      outline: 'none',

      fontSize: '.8rem',
      color: '#000',
    },
  },
  searchList: {
    position: 'absolute',
    height: 'fit-content',
    width: '13rem',
    margin: '0',
    padding: '.8rem 1.8rem',
    boxShadow: '0 0.125rem 0.625rem rgba(0, 0, 0, 0.2)',
    borderRadius: '.2rem',

    backgroundColor: '#fff',
    listStyleType: 'none',

    '& li': {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',

      '& input': {
        width: '.8rem',
        margin: '1rem .4rem',
      },
    },
  },
  searchClear: {
    fontSize: '.6rem',
    textAlign: 'center',
    color: 'grey',
  },
  searchError: {
    fontSize: '.6rem',
    color: 'red',
  },
})

export default filterStyles
