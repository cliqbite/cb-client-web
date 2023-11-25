import { clsx } from 'clsx'

/**
 * @function
 * @description Combine mutilple classNames
 * @param {string} args Array of mutilple classNames
 * @return {string} string representation of react classNames
 */
export const cls = <T>(...args: T[]): string => args.filter(Boolean).join(' ')

export default clsx
