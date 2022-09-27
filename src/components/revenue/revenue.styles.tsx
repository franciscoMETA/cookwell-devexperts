import { createUseStyles } from 'react-jss'

const RevenueStyles = createUseStyles({
  cardHeader: {
    padding: '0 1rem',

    '& h4': {
      margin: '.4rem 0',
    },
    '& p': {
      fontSize: 'smaller',
      color: '#424242',
    },
  },
  cardBody: {
    '& img': {
      width: '100%',
      height: '8rem',
      objectFit: 'cover',
    },
  },
  cardFooter: {
    padding: '0 1rem',

    '& span': {
      width: '1rem',
    },
  },
  ingredientsList: {
    padding: '0 1rem',
    listStylePosition: 'inside',
    listStyleType: 'circle',
    fontSize: 'smaller',
    color: '#424242',
  },
})

export default RevenueStyles
