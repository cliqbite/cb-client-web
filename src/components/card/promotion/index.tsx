'use client'
import { useState, type FC } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { cls } from '@/common/utils/classnames'
import fallback16x9 from '@/assets/png/fallback16x9.png'
import promotionalImage from '@/assets/png/banner.png'
import { useKeenSlider } from 'keen-slider/react'

const AUTO_SWITCH_TIMER = 5000

type ImageType = { src: string }

interface CardPromotionProps {
  images?: ImageType[]
}

const CardPromotion: FC<CardPromotionProps> = ({
  images = [{ src: fallback16x9 }, { src: promotionalImage }]
}) => {
  const [opacities, setOpacities] = useState<number[]>([])

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      rtl: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
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

  return (
    <div className={cls(styles.promotion, styles.fader)} ref={sliderRef}>
      {images.map((image, idx) => (
        <div
          key={idx}
          className={styles['fader__slide']}
          style={{ opacity: opacities[idx] }}
        >
          <Image
            alt=''
            src={image.src ?? fallback16x9}
            className={cls(styles.img, styles['fader__image'])}
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
