'use client'
import { getFood } from '@/client/functions/getFoodList'
import { log } from '@/common/log'
import { FoodType } from '@/common/types'
import { cls } from '@/common/utils/classnames'
import CardDetail from '@/components/card/detail'
import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import OutlineInput from '@/components/ui/input/outline'
import { isDev } from '@/configs/environment'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, type ChangeEvent, type MouseEvent } from 'react'
import styles from './page.module.scss'

export default function View() {
  const [queryId, setQueryId] = useState<string>('')
  const queryClient = useQueryClient()

  const getFromCache = (key: string[]): FoodType[] | undefined => {
    return queryClient.getQueryData(key)
  }

  const { data, refetch } = useQuery({
    queryKey: ['search', queryId],
    queryFn: async (args) => {
      log('[view.tsx] args ===>', args)
      const cache = getFromCache(['search', queryId])
      if (cache) return cache

      return await getFood('VVCE_CNTN01', queryId || 'all', args.signal)
    },
    enabled: !!queryId
  })

  function onSearch(event: MouseEvent<HTMLFormElement>) {
    event.preventDefault()
    refetch()
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setQueryId(event.target.value)
  }

  return (
    <section className={cls('page')}>
      <form className={cls(styles['search-container'])} onSubmit={onSearch}>
        <OutlineInput
          type='search'
          className={cls(styles.search)}
          wapperclassName={cls(styles.search, styles.wrapper)}
          outlineclassName={cls(styles.search)}
          onChange={handleInput}
          value={queryId}
        />
        <Button btn='solid' type='submit' className={styles['search-btn']}>
          <Icon icon='search' size={16} />
        </Button>
      </form>

      <section className={cls(styles['result-wrapper'])}>
        <h4>Search results</h4>
        <section>
          {(data || []).map((item) => {
            return (
              <CardDetail
                key={item?.id}
                name={item.name}
                price={item.price}
                src=''
              />
            )
          })}
          {isDev ? (
            <pre>
              {data &&
                JSON.stringify(JSON.parse(JSON.stringify(data)), null, 2)}
            </pre>
          ) : null}
        </section>
      </section>

      <aside className={cls(styles['recomendation-wrapper'])}>
        {/* recomandations */}
      </aside>
    </section>
  )
}
