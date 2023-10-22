'use client'

import { useState, type FC } from 'react'
import { Button, Input } from '@nextui-org/react'
import { log } from '@/helpers/logger'
import clsx from '@/helpers/utils/classnames'
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/components/ui'

interface viewProps {}

const View: FC<viewProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <section>
      <form className={clsx('flex flex-col justify-center gap-4')}>
        <Input
          isClearable
          type='email'
          label='Email'
          variant='bordered'
          defaultValue='example@email.com'
          className={clsx('w-full', 'hover:border-orange-600')}
          isRequired
          radius='sm'
          labelPlacement='inside'
          errorMessage='Please enter a valid email'
          onClear={() => log('input cleared')}
        />
        <Input
          label='Password'
          variant='bordered'
          isRequired
          errorMessage='Please enter a valid Password'
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          className={clsx('w-full', 'hover:border-orange-600')}
        />

        <p
          className={clsx(
            'text-xs text-red-500 self-end',
            'hover:underline hover:underline-offset-4 cursor-pointer '
          )}
        >
          Forgot Password?
        </p>

        <Button color='primary' radius='full' className={clsx('text-white')}>
          Login
        </Button>
      </form>
    </section>
  )
}
export default View
