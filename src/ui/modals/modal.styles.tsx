import { createUseStyles } from 'react-jss'

const ModalRootStyles = createUseStyles({
  modalBackground: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 200000,
  },
  modalContainer: {
    maxWidth: 'calc(100% - 40%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#fff',
    padding: '.8rem',
    borderRadius: '.4rem',
  },
  modalHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalBody: {},
  modalFooter: {},
  '@media (max-width: 480px)': {
    modalBackground: {
      zIndex: 1000000,
    },
    modalContainer: {
      height: 'fit-content',
      maxWidth: 'calc(100% - 21%)',
      padding: '1.6rem .8rem',
    },
  },

  '@media (min-width: 500px) and (max-width: 1024px)': {},
})

export default ModalRootStyles
