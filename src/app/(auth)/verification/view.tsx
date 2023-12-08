'use client'
import OTPInput from '@/components/otp'
import { ROUTE } from '@/common/constants/route'
import { error, log } from '@/common/log'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, type FC } from 'react'
import styles from './page.module.scss'
import authService from '@/client/modules/auth'
import { cls } from '@/common/utils/classnames'

interface ViewProps {}

const OTP_LENGTH = 6

const View: FC<ViewProps> = ({}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [disableAcceptOTP, enableAcceptOTP] = useState(true)

  if (!searchParams.has('id') || !searchParams.has('mobile')) {
    router.replace(ROUTE.LOGIN)
  }

  const onChangeOTP = async (values: string) => {
    log('otp::', values)
    if (values.length === OTP_LENGTH && searchParams.has('id')) {
      try {
        enableAcceptOTP(false)
        const userId = String(searchParams.get('id'))
        if (userId === null) {
          error('verification::invalid user::', userId)
          throw Error('Invalid user')
        }
        const responce = await authService.verifyLoginMobile(userId, values)
        log('otp::verification::responce::', responce)
        router.replace(ROUTE.SUCCESS)
      } catch (error) {
        enableAcceptOTP(true)
      }
    }
  }

  return (
    <section className={cls(styles.container)}>
      <p>
        Please enter the verification code that has been sent to{' '}
        {String(searchParams.get('mobile')) ?? 'device'}
      </p>
      <div>
        <OTPInput
          length={OTP_LENGTH}
          className={styles['otp-container']}
          inputClassName={styles['otp-input']}
          isNumberInput
          autoFocus
          onChangeOTP={onChangeOTP}
          disabled={!disableAcceptOTP}
        />
      </div>
      <label className={styles.timer}>
        Code will exipre in <em>15mins</em>{' '}
      </label>
      <label className={styles.resend}>
        Haven&lsquo;t received a code? <strong>Resend</strong>{' '}
      </label>
    </section>
  )
}
export default View
