import fallback16x9 from '@/assets/png/fallback16x9.png'
import { cls } from '@/common/utils/classnames'
import NextImage from 'next/image'
import { useMemo, useState, type FC } from 'react'
import type { TImage } from './image.type'
import styles from './style.module.scss'

export const Image: FC<TImage> = ({
  className,
  fallbackSrc,
  src,
  ...props
}) => {
  const [hasError, setHasError] = useState(false)
  const mhasError = useMemo(() => hasError, [hasError])
  return (
    <NextImage
      draggable={false}
      {...props}
      className={cls(styles['image'], className)}
      alt={props.alt}
      src={hasError ? fallbackSrc ?? fallback16x9 : src}
      onError={() => !mhasError && setHasError(true)}
    />
  )
}

export default Image
