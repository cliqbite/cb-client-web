'use client'
import useAuth from '@/client/hooks/useAuth'
import authService from '@/client/lib/auth'
import { ROUTE } from '@/common/constants/route'
import { log } from '@/common/log'
import { cls } from '@/common/utils/classnames'
import OutlineCTA from '@/components/ui/button/outline'
import LoginCTA from '@/components/ui/button/solid'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from './page.module.scss'

const phoneRegex = /^\d{10}$/

const LoginSchema = z.object({
  mobile: z
    .string({ required_error: 'Enter your Phone number' })
    .refine((value) => phoneRegex.test(value), {
      message: 'Invalid phone number'
    })
})

type TLoginSchema = z.infer<typeof LoginSchema>

interface ViewProps {}

const View: FC<ViewProps> = ({}) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema)
  })

  const { user, isLoading } = useAuth()

  if (!isLoading && user?.$id) {
    router.replace(ROUTE.HOME)
  }

  const onSubmit = async (data: TLoginSchema) => {
    const mobileNumber = `+91${data.mobile}`
    const responce = await authService.loginMobile(mobileNumber)
    log({ data, responce })
    if (responce)
      router.replace(
        `${ROUTE.VERIFY}?mobile=${mobileNumber}&id=${responce?.userId}&creat=${responce?.$createdAt}&expire=${responce?.expire}`
      )
  }

  const gAuthHandle = async () => {
    const successURL = `${window?.location.origin}${ROUTE.HOME}`,
      failurURL = `${window?.location?.origin}${ROUTE.LOGIN}`

    await authService.gOAuthLogin(successURL, failurURL)
  }

  return (
    <section className={cls(styles['login-cta'])}>
      <h4>Get started with</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('mobile')}
          type='tel'
          name='mobile'
          placeholder={'Enter your mobile number'}
          error={errors.mobile?.message}
          label='Phone Number'
          className={styles.cta}
          outlineclassName={styles.cta}
          wapperclassName={styles.cta}
        />
        <LoginCTA
          className={cls(styles.cta, styles.btn)}
          type='submit'
          disabled={isSubmitting}
        >
          SignIn
        </LoginCTA>
      </form>
      <label className={styles.orLabel}>or</label>
      <OutlineCTA
        className={cls(styles.cta, styles.btn, styles.google)}
        onClick={gAuthHandle}
      >
        <Icon aria-label='google-icon' icon='google' size={24} />
        Continue with Google
      </OutlineCTA>
    </section>
  )
}
export default View
