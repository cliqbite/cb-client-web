import env from '@/configs/environment'
import { Client } from 'appwrite'

const client = new Client()

client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId)

export default client
