import * as fs from 'fs'
import * as path from 'path'
import { logger } from '../log'

type PackageJson = {
  version: string
  // Add other fields if needed
}

// get current package version from package.json
export const getPackageVersion = (): string => {
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json')
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8')
    const packageJson: PackageJson = JSON.parse(packageJsonContent)
    return packageJson.version
  } catch (error) {
    logger.error('Error reading package.json:', error)
    return 'N/A'
  }
}
