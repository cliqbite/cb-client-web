'use client'
import { type FC } from 'react'
import Input from '@/components/input/outline'
import OutlineCTA from '@/components/button/outline'
import LoginCTA from '@/components/button/solid'
import { cls } from '@/helpers/utils/classnames'
import styles from './page.module.scss'
import { z } from 'zod'
import { log } from '@/helpers/logger'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import authService from '@/modules/auth'
import { useRouter } from 'next/navigation'
import { ROUTE } from '@/helpers/constants/route'

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

  const onSubmit = async (data: TLoginSchema) => {
    const mobileNumber = `+91${data.mobile}`
    const responce = await authService.loginMobile(mobileNumber)
    log({ data, responce })
    if (responce)
      router.replace(
        `${ROUTE.VERIFY}?mobile=${mobileNumber}&id=${responce?.userId}&creat=${responce?.$createdAt}&expire=${responce?.expire}`
      )
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
      <OutlineCTA className={cls(styles.cta, styles.btn)}>
        Continue with Google
      </OutlineCTA>
    </section>
  )
}
export default View