import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IoCloseOutline } from 'react-icons/io5'
import ModalRootStyles from './modal.styles'

type modalProps = {
  children: ReactNode
  onCloseHandler: () => void
}

const ModalRoot = ({ children, onCloseHandler }: modalProps) => {
  const classes = ModalRootStyles()
  const el: HTMLElement = document.getElementById('modal-root')!

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) console.log('ESC was pressed')
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return createPortal(
    <div
      id="modalBackground"
      className={classes.modalBackground}
      onClick={(e: any) => {
        if (e.target.getAttribute('id') != null) onCloseHandler()
      }}
    >
      <div className={classes.modalContainer}>
        <div className={classes.modalHeader}>
          <IoCloseOutline onClick={() => onCloseHandler()} />
        </div>
        <div className={classes.modalBody}>{children}</div>
        <div className={classes.modalFooter}></div>
      </div>
    </div>,
    el
  )
}

export default ModalRoot
