import { createUseStyles } from 'react-jss'

const RevenueModalStyles = createUseStyles({
  stepContainer: {
    height: 'fit-content',
    display: 'flex',
    padding: '1rem',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'start',
    backgroundColor: '#fff',

    '& p': {
      maxWidth: '90%',
    },
  },
  stepDot: {
    width: '2rem',
    height: '2rem',
    display: 'inline-grid',
    alignItems: 'center',
    borderRadius: '50%',
    textAlign: 'center',
    marginRight: '1rem',
    backgroundColor: '#3593e9',
  },
  '@media (max-width: 480px)': {
    stepContainer: {
      '& p': {
        maxWidth: '70%',
      },
    },
  },

  '@media (min-width: 500px) and (max-width: 1024px)': {},
})

export default RevenueModalStyles
