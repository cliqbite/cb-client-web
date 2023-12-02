import { ReactNode } from 'react'
import t, { type ToastOptions } from 'react-hot-toast'
import Icon from '../ui/icon'

export const toaster = (
  children: string | ReactNode,
  options: ToastOptions = {}
) =>
  t.custom(
    (_t) => (
      <span
        className={`flex justify-center items-center bg-white px-6 py-4 shadow-md rounded-full ${
          _t.visible ? 'animate-enter' : 'animate-leave'
        }`}
      >
        {children}
        <Icon
          icon='cross'
          className='cursor-pointer '
          onClick={() => t.dismiss(_t.id)}
        >
          Dismiss
        </Icon>
      </span>
    ),
    {
      ...options,
      style: {
        background: 'rgba(100,0,0,0)',
        boxShadow: 'initial'
      }
    }
  )
