'use client'
import { modal$ } from '@/client/container/provider'
import { type FC } from 'react'
import { ModalCustom } from './custom-modal'
import { ModalDialog } from './dialog-modal'

export const Modal: FC = () => {
  if (typeof HTMLDialogElement !== 'function' || modal$.props.customModal)
    return <ModalCustom />

  return <ModalDialog />
}

export default Modal
