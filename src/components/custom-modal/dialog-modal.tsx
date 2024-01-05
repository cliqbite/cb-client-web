'use client'
import { modal$ } from '@/client/container/provider/modal'
import { useEffectOnce, useOnClickOutside } from '@/client/hooks'
import { cls } from '@/common/utils/classnames'
import { useCallback, useRef, type ElementRef, type FC } from 'react'
import styles from './style.module.scss'

export const ModalDialog: FC = () => {
  const modalRef = useRef<ElementRef<'dialog'>>(null)

  const onModalObserver = useCallback((data: boolean) => {
    if (data) modalRef.current?.showModal()
    if (!data) modalRef.current?.close()
  }, [])

  useEffectOnce(() => {
    modal$.subscribe(onModalObserver)
    return () => modal$.unsubscribe(onModalObserver)
  })

  const handleCloseModal = useCallback(() => {
    modal$.trigger(false)
  }, [])

  useOnClickOutside(modalRef, handleCloseModal)

  return (
    <dialog
      ref={modalRef}
      className={cls(
        styles['modal-dialog'],
        modal$.props?.blurBackDrop && styles['modal--blur']
      )}
    >
      {modal$.props.enableCloseBtn ? (
        <button onClick={handleCloseModal}>Close</button>
      ) : null}
      {modal$.body}
    </dialog>
  )
}
