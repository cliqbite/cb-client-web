import { logger } from '../log'
import packages from '../../../package.json'

type PackageJson = {
  version: string
  // Add other fields if needed
}

// get current package version from package.json
export const getPackageVersion = (): string => {
  try {
    const { version }: PackageJson = packages
    return version
  } catch (error) {
    logger.error('Error reading package.json:', error)
    return 'N/A'
  }
}
