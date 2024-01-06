'use client'
import promotionalImage from '@/assets/png/banner.png'
import fallback16x9 from '@/assets/png/fallback16x9.png'
import { useMediaQuery } from '@/client/hooks/useMediaQuery'
import { cls } from '@/common/utils/classnames'
import Image from '@/components/ui/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { type FC } from 'react'
import styles from './styles.module.scss'

const AUTO_SWITCH_TIMER = 7000

type ImageType = { src: string }

interface CardPromotionProps {
  images?: ImageType[]
}

const CardPromotion: FC<CardPromotionProps> = ({
  images = [{ src: fallback16x9 }, { src: promotionalImage }]
}) => {
  const matches = useMediaQuery('(min-width: 768px)')
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        origin: 'center',
        spacing: 6,
        perView() {
          if (matches) return 2
          return 1
        }
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, AUTO_SWITCH_TIMER)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )
  if (images.length === 0) return <></>

  return (
    <div
      className={cls('keen-slider', styles['promotion'])}
      ref={images.length > 1 ? sliderRef : undefined}
    >
      {images.map((image, idx) => (
        <div
          key={idx}
          className={cls('keen-slider__slide', styles['promotion__slide'])}
        >
          <Image
            alt=''
            src={image.src ?? fallback16x9}
            className={cls(styles['promotion__image'])}
            loading='lazy'
            width={342}
            height={184}
          />
        </div>
      ))}
    </div>
  )
}
export default CardPromotion
