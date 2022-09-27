import { createUseStyles } from 'react-jss'

const CardStyles = createUseStyles({
  card: {
    height: '100%',
    width: '18rem',
    margin: '1rem',
    padding: '1rem 0',
    backgroundColor: '#fff',
    borderRadius: '.4rem',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',

    textAlign: 'start',
  },

  '@media (max-width: 480px)': {
    card: {
      width: 'calc(100% - 4rem)',
      margin: '2rem',
    },
  },
  '@media (min-width: 500px) and (max-width: 1024px)': {
    card: {
      margin: '2rem',
    },
  },
})

export default CardStyles
