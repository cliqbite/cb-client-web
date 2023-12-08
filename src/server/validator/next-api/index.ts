import { getPackageVersion } from '@/common/utils/version'

const apiVersion = 'v0.1'

export const headerNextApiValidation = 'x-api-validation-agent'

export const apiValidationAgent = `cb:client:${getPackageVersion()}:${apiVersion}`

export const nextApiHeader = {
  'x-api-validation-agent': apiValidationAgent
}
