import { createUseStyles } from 'react-jss'

const BannerStyles = createUseStyles({
  bannerContainer: {
    position: 'fixed',
    top: '0',
    height: '4rem',
    width: 'calc(100% - 4rem)',
    padding: '0 2rem',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'baseline',
    gap: '1rem',
    color: '#fff',

    '& :nth-child(1)': {
      WebkitOrder: '1',
      msFlexOrder: '1',
      order: 1,
      WebkitFlex: '0 1 auto',
      msFlex: '0 1 auto',
      flex: '0 1 auto',
      WebkitAlignSelf: 'auto',
      msFlexItemAlign: 'auto',
      alignSelf: 'auto',
    },
    '& :nth-child(2)': {
      WebkitOrder: '2',
      msFlexOrder: '2',
      order: 2,
      WebkitFlex: '3 1 auto',
      msFlex: '3 1 auto',
      flex: '3 1 auto',
      WebkitAlignSelf: 'auto',
      msFlexItemAlign: 'auto',
      alignSelf: 'auto',
    },
    '& :nth-child(3)': {
      WebkitOrder: '3',
      msFlexOrder: '3',
      order: 3,
      WebkitFlex: '0 1 auto',
      msFlex: '0 1 auto',
      flex: '0 1 auto',
      WebkitAlignSelf: 'auto',
      msFlexItemAlign: 'auto',
      alignSelf: 'auto',
    },
  },
  bannerMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '.4rem',
    textAlign: 'start',
  },
  error: {
    background: 'red',
  },
  info: {
    background: 'blue',
  },
})

export default BannerStyles
