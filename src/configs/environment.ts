const env = {
  hostUrl: process.env.NEXT_PUBLIC_HOST_URL!,
  // appwrite creds
  appwriteUrl: process.env.NEXT_PUBLIC_APPWRITE_URL!,
  appwriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  appwriteDatabaseId: {
    cliqbite: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_CLIQBITE_ID!
  },
  appwriteCollectionId: {
    user: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USER_ID!,
    canteen: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CANTEEN_ID!,
    orders: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ORDERS_ID!,
    colleges: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_COLLEGES_ID!
  },
  appwriteBucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
  // analytics
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID!,
  appwriteApiKey: process.env.NEXT_PUBLIC_APPWRITE_API_KEY!
}

export const isDev = process.env.NODE_ENV === 'development'

export const isProd = process.env.NODE_ENV === 'production'

export default env
