import env from '@/configs/environment'
import Logger from '@/common/log'
import { Client } from 'appwrite'

let client: Client
const logger = new Logger('service::appwrite::')

export const createInstace = () => {
  if (!client) {
    logger.log('create:client')
    client = new Client()
    client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId)
  }
  logger.log('return:client')
  return client
}

export default createInstace()
