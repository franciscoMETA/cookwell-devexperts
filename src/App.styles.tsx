import { RiFontSize } from 'react-icons/ri'
import { createUseStyles } from 'react-jss'

const AppMainStyles = createUseStyles({
  header: {
    width: 'calc(100% - 20rem)',
    position: 'fixed',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: '0 10rem',
    padding: '0 .2rem',

    borderRadius: '0 0 .4rem .4rem',
    boxShadow: '0 0.125rem 0.625rem rgb(0 0 0 / 20%)',
  },
  recipesLoader: {
    minHeight: 'calc(100vh - 14rem)',
    marginTop: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  footer: {
    borderTop: 'solid 0.124rem #cacaca',
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '6rem',
    textAlign: 'center',
    fontSize: 'smaller',
  },
  '@media (max-width: 480px)': {
    header: {
      width: 'calc(100%)',
      margin: '0',
      zIndex: 500000,
    },
    recipesContainer: {
      maxHeight: 'calc(100% - 28%)',
      flexDirection: 'row',
      marginTop: '8rem',
    },
    footer: {
      fontSize: '.625rem',

      '& div': {
        padding: '.6rem .4rem',
      },
    },
  },

  '@media (min-width: 500px) and (max-width: 1024px)': {
    recipesContainer: {
      margin: '0 8rem',
      marginTop: '6rem',

      '& article': {
        flex: '1 0 31%',
      },
    },
  },

  '@media (min-width: 1024px)': {
    recipesContainer: {
      maxHeight: 'calc(100% - 22%)',
      margin: '6rem 10rem',
      marginTop: '6rem',

      '& article': {
        maxWidth: '24%',
        flex: '1 0 21%',
      },
    },
  },
})

export default AppMainStyles
