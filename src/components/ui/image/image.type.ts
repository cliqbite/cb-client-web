import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { ImageProps as NextImageProps } from 'next/image'

export interface TImage extends NextImageProps {
  /**
   * Fallback image when image loads fails
   */
  fallbackSrc?: string | StaticImport
}
