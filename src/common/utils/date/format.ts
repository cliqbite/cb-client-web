import { format } from 'date-fns'

// Save date in UTC format

export function DateFns<T extends Date>(date: T) {
  return {
    fYMDMHS: format(date, "yyyy-MM-dd'T'HH:mm:ssXXX"),
    fYMD: format(date, 'yyyy-MM-dd'),
    toUTC: date.toUTCString()
  }
}
