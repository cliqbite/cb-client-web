'use client'
import { cls } from '@/common/utils/classnames'
import styles from './page.module.scss'
import Select from '@/components/ui/selection/select'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import profileService from '@/client/modules/profile'
import { ROUTE } from '@/common/constants/route'
import { useState, type ChangeEvent, useEffect } from 'react'
import { log } from '@/common/log'
import { useQuery } from '@tanstack/react-query'
import { getCollege } from '@/client/functions/getCollege'
import Loader from '@/components/ui/loader'
import { useRouter } from 'next/navigation'
import { Canteen } from '@/server/model/canteen'
import { getCanteen } from '@/client/functions/getCateen'
import { College } from '@/server/model/college'
import { Colleges } from '@/common/types'
import { useCanteen } from '@/client/store/useCanteen'
import { useCollege } from '@/client/store/useCollege'

const View = () => {
  const router = useRouter()
  const {
    data: colleges,
    isLoading: isCollegeLoading,
    isSuccess: isClgSuccess
  } = useQuery<College[]>({
    queryKey: ['college-selection'],
    queryFn: getCollege
  })

  const [state, setState] = useState({
    college: {} as College,
    canteen: {} as Canteen
  })

  useEffect(() => {
    useCollege.persist.rehydrate()
    useCanteen.persist.rehydrate()
  }, [])

  const setColleges = useCollege((value) => value.setColleges)
  const setCollege = useCollege((value) => value.setCollege)
  const setCanteens = useCanteen((value) => value.setCanteens)
  const setCanteen = useCanteen((value) => value.setCanteen)

  if (isClgSuccess && colleges.length) {
    setColleges(colleges)
  }

  const collegeID = state.college.id

  const {
    data: canteens,
    isLoading: isCanteenLoading,
    status,
    fetchStatus,
    isSuccess: isCanteenSuccess
  } = useQuery<Canteen[]>({
    queryKey: ['canteen-selection', collegeID],
    queryFn: () => getCanteen(collegeID),
    // The query will not execute until the collegeID exists
    enabled: !!state.college.id
  })

  if (isCanteenSuccess && canteens.length) {
    setCanteens(canteens)
  }

  const onOptionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    log(event.target.id, event.target.value)
    if (event.target.id === 'college') {
      colleges && setColleges?.(colleges)
      const college = colleges?.find(
        (clg) => clg.college_name === event.target.value
      )
      college && setState((o) => ({ ...o, college }))
      college && setCollege?.(college)
    }

    if (event.target.id === 'canteen') {
      const canteen = canteens?.find((clg) => clg.name === event.target.value)
      canteen && setState((o) => ({ ...o, canteen }))
      canteens && setCanteens?.(canteens)
      canteen && setCanteen?.(canteen)
    }
  }

  const updateCollegeCanteenPreference = async () => {
    const res = await Promise.all([
      profileService.updatePrefs({
        college: state.college,
        canteen: state.canteen
      })
    ])
    log('success onsubmit::', res, state)
    router.push(ROUTE.HOME)
  }

  return (
    <section>
      <motion.div
        initial={{ x: '-50%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Select your college and canteen
        </h2>
        {isCollegeLoading ? (
          <Loader>
            <Loader.Dot />
          </Loader>
        ) : (
          <>
            <Select onChange={onOptionChangeHandler} id='college'>
              <Select.OptionClg options={colleges as Colleges} />
            </Select>
            <br />
            {isCanteenLoading ? (
              <Loader>
                <Loader.Dot />
              </Loader>
            ) : (
              <Select
                onChange={onOptionChangeHandler}
                id='canteen'
                disabled={!(status === 'success' && fetchStatus === 'idle')}
              >
                <Select.OptionCanteen options={canteens as Canteen[]} />
              </Select>
            )}
            <br />
            <Button
              disabled={!(state.college.id && state.canteen.id)}
              btn='outline'
              className={'p-2 w-full'}
              onClick={updateCollegeCanteenPreference}
            >
              Grab your order!
            </Button>
          </>
        )}
      </motion.div>
    </section>
  )
}

export default View
