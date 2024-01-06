import Logger from '@/common/log'
import { updateProperty } from '@/common/utils/object/updateProperty'
import { ReactNode } from 'react'

// eslint-disable-next-line no-unused-vars
type TObserver<O> = (data: O) => void
type TData = boolean
type TProperties = {
  enableCloseBtn?: boolean
  backDrop?: boolean
  blurBackDrop?: boolean
  customModal?: boolean
}

export class ModalObserver<T = any> {
  private logger = new Logger('modal-observer::')
  private children: ReactNode = null
  private observers: TObserver<T>[] = []
  private default: TProperties = {
    enableCloseBtn: false,
    backDrop: true,
    blurBackDrop: false,
    customModal: false
  }
  private properties: TProperties = {
    ...this.default
  }

  subscribe(func: TObserver<T>): void {
    this.observers.push(func)
  }

  unsubscribe(func: TObserver<T>): void {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  trigger(data: T): void {
    this.logger.log('trigger::', data)
    this.observers.forEach((observer) => observer(data))
  }

  closeAll(): void {
    this.logger.log('close all modals')
    this.trigger(null as T)
  }

  set body(node: ReactNode) {
    this.children = node
  }

  get body(): ReactNode {
    return this.children
  }

  set props(props: Partial<TProperties>) {
    this.properties = updateProperty(this.properties, props)
  }

  get props() {
    return this.properties
  }
}

export const TModalObserver = ModalObserver<boolean>
export const modal$ = new ModalObserver<TData>()
export { Modal as default } from '@/components/custom-modal'
