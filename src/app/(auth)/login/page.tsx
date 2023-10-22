'use client'
import clsx from '@/helpers/utils/classnames'
import type { FC } from 'react'
import View from './view'
import { Button } from '@nextui-org/react'

interface PageProps {}

const Login: FC<PageProps> = ({}) => {
  return (
    <>
      <main
        className={clsx(
          'p-3',
          'flex flex-col justify-end gap-6 justify-items-end h-full'
        )}
      >
        <h1 className={clsx('text-2xl', 'font-bold')}>Login</h1>
        <View />
        <p className={clsx('text-small', 'self-center')}>
          Dont have an account?{' '}
          <strong
            className={clsx(
              'text-red-500',
              'hover:underline hover:underline-offset-4'
            )}
          >
            Sign Up
          </strong>
        </p>
        <p
          className={clsx(
            'text-small',
            ' self-center',
            'flex items-center justify-center'
          )}
        >
          <span className={clsx('h-1 w-10 bg-black rounded-full m-4')} />
          Sign in with{' '}
          <span className={clsx('h-1 w-10 bg-black rounded-full m-4')} />
        </p>
        <Button color='primary' variant='bordered'>
          Login with Mobile
        </Button>
        <Button color='primary' variant='bordered'>
          Continue with Google
        </Button>
      </main>
    </>
  )
}
export default Login
