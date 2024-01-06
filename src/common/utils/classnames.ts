import { clsx, type ClassValue } from 'clsx'
// @ts-ignore
import { twMerge } from 'tailwind-merge'

/**
 * @function
 * @description Combine mutilple classNames
 * @param {string} args Array of mutilple classNames
 * @return {string} string representation of react classNames
 */
export const cls = <T>(...args: T[]): string => {
  const _classNames = args.filter(Boolean).join(' ')
  return cn(_classNames)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default clsx
