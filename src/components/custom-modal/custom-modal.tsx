import { modal$ } from '@/client/container/provider'
import {
  useEffectOnce,
  useEventListener,
  useOnClickOutside
} from '@/client/hooks'
import { cls } from '@/common/utils/classnames'
import { useCallback, useRef, useState } from 'react'
import styles from './style.module.scss'

export const ModalCustom = () => {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef<React.ElementRef<'section'>>(null)
  const modalBodyRef = useRef<React.ElementRef<'div'>>(null)

  const onModalObserver = useCallback((data: boolean) => {
    setShowModal(!!data)
  }, [])

  useEffectOnce(() => {
    modal$.subscribe(onModalObserver)
    return () => {
      modal$.unsubscribe(onModalObserver)
    }
  })

  const handleCloseModal = useCallback(() => {
    modal$.trigger(false)
  }, [])

  const handleEscapeKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      modal$.trigger(false)
    }
  }, [])

  useOnClickOutside(modalBodyRef, handleCloseModal)

  useEventListener('keydown', handleEscapeKeyPress)

  return (
    <section
      className={cls(
        styles['modal-custom'],
        modal$.props?.blurBackDrop && styles['modal--blur']
      )}
      data-open={showModal}
      ref={modalRef}
    >
      <div
        className={cls(
          styles['modal-custom-container'],
          styles['modal-dialog']
        )}
        data-open={showModal}
        aria-modal={showModal}
        ref={modalBodyRef}
      >
        {modal$.props.enableCloseBtn ? (
          <button onClick={handleCloseModal} autoFocus>
            close
          </button>
        ) : null}
        {modal$.body}
      </div>
    </section>
  )
}
