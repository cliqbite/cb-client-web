'use client'

import { logger } from '@/common/log'
import { useEffect } from 'react'
import { cls } from '@/common/utils/classnames'
import Image from 'next/image'
import cookieStar from '@/assets/svg/cookie-star.svg'
import Button from '@/components/ui/button'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    logger.error(error)
  }, [error])

  return (
    <main className={cls('page', 'not-found')}>
      <Image
        src={cookieStar}
        alt='error-cookie'
        width={250}
        height={200}
        loading='lazy'
        className='img'
      />
      <h2 className='error-message'>Something went wrong!</h2>
      <p className='message'>
        {error.message}
        <br />
      </p>
      <label className={'text-gray-500 text-xs'}>
        {error.name}:{error.digest}
      </label>
      <Button
        btn='solid'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  )
}
