import { createUseStyles } from 'react-jss'

const TopBarStyles = createUseStyles({
  navContainer: {
    height: '4rem',
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
  },
  '@media screen and (max-width: 480px)': {
    navContainer: {
      flexDirection: 'column',
      height: 'fit-content',
      padding: '.4rem 0',
    },
  },
})

export default TopBarStyles
