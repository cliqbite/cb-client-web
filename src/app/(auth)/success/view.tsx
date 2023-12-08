'use client'
import Input from '@/components/ui/input/outline'
import { useState, type FC } from 'react'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './page.module.scss'
import Button from '@/components/ui/button'
import { cls } from '@/common/utils/classnames'
import profileService from '@/client/modules/profile'
import { log } from '@/common/log'
import { motion } from 'framer-motion'
import type { College } from '@/common/types'
import { useCollege } from '@/client/store/useCollege'
import Link from 'next/link'
import { ROUTE } from '@/common/constants/route'
import Select from '@/components/ui/selection/select'
import { DateFns } from '@/common/utils/date/format'
import Icon from '@/components/ui/icon'

interface ViewProps {
  colleges: College[]
}

const AGE_LIMIT = 12

const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  // email: z.string().min(1, 'Email is required').email('Invalid email address'),
  college: z.string().min(1, 'College is required'),
  dateOfBirth: z.coerce
    .date()
    .refine((date) => {
      // check if the date is not in the future
      const currentDate = new Date()
      return date <= currentDate
    }, 'Invalid date of birth')
    .refine(
      (date) => {
        // check if the date is at least 5 years ago
        const currentDate = new Date()
        const fiveYearsAgo = new Date(currentDate)
        fiveYearsAgo.setFullYear(currentDate.getFullYear() - AGE_LIMIT)

        return date <= fiveYearsAgo
      },
      `Date of birth(DOB) must be at least ${String(AGE_LIMIT)} years old`
    )
})

const steps = [
  {
    id: 'Step 0',
    name: 'Congratulations'
  },
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'dateOfBirth']
  },
  {
    id: 'Step 2',
    name: 'Address',
    fields: ['college']
  },
  { id: 'Step 3', name: 'Complete' }
]

type TFormDataSchema = z.infer<typeof FormDataSchema>
type FieldName = keyof TFormDataSchema

const View: FC<ViewProps> = ({ colleges }) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<TFormDataSchema>({
    resolver: zodResolver(FormDataSchema)
  })

  const setColleges = useCollege((state) => state.setColleges)
  const setCollege = useCollege((state) => state.setCollege)
  setColleges(colleges)

  const processForm: SubmitHandler<TFormDataSchema> = async (data) => {
    const _clg = (colleges || []).find(
      (clg) => clg.college_name === data.college
    )
    log(data, _clg)
    if (_clg) setCollege(_clg)
    else setPreviousStep(1)
    const res = await Promise.all([
      profileService.updateName(`${data.firstName} ${data.lastName}`),
      profileService.updatePrefs({
        dob: DateFns(data.dateOfBirth).toUTC,
        college: _clg
      })
    ])
    log('success onsubmit::', res)
    reset()
  }

  const next = async () => {
    const fields = steps[currentStep].fields
    if (currentStep) {
      const output = await trigger(fields as FieldName[], { shouldFocus: true })
      log('next::', output, fields)
      if (!output) return
    }

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep((step) => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step - 1)
    }
  }

  return (
    <section className={styles.step}>
      <form onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <section className={cls(styles['step-1'])}>
            <span>
              <h1>Awesome</h1>
              <Icon icon='awesome' size={32} className={styles.icon} />
            </span>
            <strong> Your are successfully logged-in</strong>
            <p>You are now part of CliqBite.</p>
          </section>
        )}
        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Personal Information
            </h2>

            <Input
              type='text'
              {...register('firstName')}
              placeholder={''}
              error={errors.firstName?.message}
              label='Name'
              className={styles.cta}
              outlineclassName={styles.cta}
              wapperclassName={styles.cta}
              autoComplete='given-name'
            />
            <Input
              {...register('lastName')}
              placeholder={''}
              error={errors.lastName?.message}
              label='Last name'
              className={styles.cta}
              outlineclassName={styles.cta}
              wapperclassName={styles.cta}
              autoComplete='family-name'
            />

            <Input
              {...register('dateOfBirth')}
              placeholder={''}
              error={errors.dateOfBirth?.message}
              label='Date of Birth'
              type='date'
              className={styles.cta}
              outlineclassName={styles.cta}
              wapperclassName={styles.cta}
              autoComplete='bday'
            />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Address
            </h2>
            <Select register={register('college')}>
              <Select.OptionClg options={colleges} />
            </Select>
          </motion.div>
        )}

        {currentStep === 3 && (
          <>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Complete
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Thank you for your submission.
            </p>
          </>
        )}
      </form>
      <section className={styles.action}>
        {currentStep < steps.length - 1 ? (
          <>
            <Button
              btn='base'
              className={cls(
                styles.cta,
                styles.btn,
                currentStep === 0 && styles.hide
              )}
              disabled={isSubmitting}
              onClick={prev}
            >
              <Icon icon='back' />
            </Button>
            <Button
              btn='base'
              className={cls(styles.cta, styles.btn)}
              disabled={isSubmitting}
              onClick={next}
            >
              Next
              <Icon icon='back' style={{ rotate: '180deg' }} />
            </Button>
          </>
        ) : (
          <Link href={ROUTE.HOME} className={cls(styles.cta, styles.btn)}>
            Grab your Food
          </Link>
        )}
      </section>
    </section>
  )
}
export default View

/// reference: https://github.dev/HamedBahram/next-multistep-form/blob/main/components/form.tsx
