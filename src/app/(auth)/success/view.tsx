'use client'
import { getCanteen } from '@/client/functions/getCateen'
import { getCollege } from '@/client/functions/getCollege'
import { getUser } from '@/client/functions/getUser'
import profileService from '@/client/lib/profile'
import { useCanteen } from '@/client/store/useCanteen'
import { useCollege } from '@/client/store/useCollege'
import { ROUTE } from '@/common/constants/route'
import { log } from '@/common/log'
import type { College } from '@/common/types'
import { cls } from '@/common/utils/classnames'
import { DateFns } from '@/common/utils/date/format'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input/outline'
import Loader from '@/components/ui/loader'
import Select from '@/components/ui/selection/select'
import { Canteen } from '@/server/model/canteen'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState, type FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from './page.module.scss'

interface ViewProps {}

const AGE_LIMIT = 1

const FormDataSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  // email: z.string().min(1, 'Email is required').email('Invalid email address'),
  college: z.string().min(1, 'College name is required'),
  canteen: z.string().min(1, 'Canteen name is required'),
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
    name: 'Select college and Canteen Information',
    fields: ['college', 'canteen']
  },
  { id: 'Step 3', name: 'Complete' }
]

type TFormDataSchema = z.infer<typeof FormDataSchema>
type FieldName = keyof TFormDataSchema

const View: FC<ViewProps> = () => {
  const {
    data: colleges,
    isSuccess: isClgSuccess,
    isLoading: isCollegeLoading
  } = useQuery<College[]>({
    queryKey: ['college-selection'],
    queryFn: getCollege,
    retry: 3
  })

  const router = useRouter()
  const {
    data: user,
    isLoading: isUserLoading,
    isSuccess: isUserFetched
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  })

  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedClg, setSelectedClg] = useState({} as College)
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
  const setCanteen = useCanteen((state) => state.setCanteen)
  const setCanteens = useCanteen((state) => state.setCanteens)

  if (!isUserLoading && isUserFetched) {
    const userPerfs = user?.prefs || []
    if (userPerfs) {
      const mappedUserPrefs = new Map(Object.entries(userPerfs))
      log('mappedUserPrefs::', mappedUserPrefs)
      if (mappedUserPrefs.has('college') && mappedUserPrefs.has('canteen')) {
        setCanteen(mappedUserPrefs.get('canteen'))
        setCollege(mappedUserPrefs.get('college'))
        router.push(ROUTE.HOME)
      }
    }
  }

  isClgSuccess && setColleges(colleges)

  const handleClgOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const _college = colleges?.find(
      (clg) => clg.college_name === event.target.value
    )
    _college && setSelectedClg(_college)
  }

  const {
    data: canteens,
    isLoading: isCanteenLoading,
    status,
    fetchStatus,
    isSuccess: isCanteenSuccess
  } = useQuery<Canteen[]>({
    queryKey: ['canteen-selection', selectedClg.id],
    queryFn: () => getCanteen(selectedClg.id),
    // The query will not execute until the collegeID exists
    enabled: !!selectedClg.id
  })

  isCanteenSuccess && setCanteens(canteens)

  const processForm: SubmitHandler<TFormDataSchema> = async (data) => {
    const _clg = (colleges || []).find(
      (clg) => clg.college_name === data.college
    )
    const _canteen = (canteens || []).find((ctn) => ctn.name === data.canteen)

    log(data, _clg)
    if (_clg && _canteen) {
      setCollege(_clg)
      setCanteen(_canteen)
    } else setPreviousStep(1)
    const res = await Promise.all([
      profileService.updateName(`${data.firstName} ${data.lastName}`),
      profileService.updatePrefs({
        dob: DateFns(data.dateOfBirth).toUTC,
        college: _clg,
        canteen: _canteen
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
      {isUserLoading ? (
        <>
          <Loader>
            <Loader.Default />
          </Loader>
        </>
      ) : (
        <>
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
                  Select your college
                </h2>
                {isCollegeLoading ? (
                  <Loader>
                    <Loader.Dot />
                  </Loader>
                ) : (
                  isClgSuccess && (
                    <Select
                      register={register('college', {
                        onChange: handleClgOnChange
                      })}
                    >
                      <Select.OptionClg options={colleges} />
                    </Select>
                  )
                )}
                <br />
                {isCanteenLoading && status !== 'success' ? (
                  <Loader>
                    <Loader.Dot />
                  </Loader>
                ) : (
                  <Select
                    register={register('canteen')}
                    disabled={!(status === 'success' && fetchStatus === 'idle')}
                  >
                    <Select.OptionCanteen options={canteens as Canteen[]} />
                  </Select>
                )}
                <br />
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
              <Link
                href={ROUTE.HOME}
                className={cls(styles.cta, styles.btn)}
                passHref
              >
                <Button btn='outline'>Click! to Grab your Food</Button>
              </Link>
            )}
          </section>
        </>
      )}
    </section>
  )
}
export default View

/// reference: https://github.dev/HamedBahram/next-multistep-form/blob/main/components/form.tsx
