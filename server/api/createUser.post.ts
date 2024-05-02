import { PrismaClient } from '@prisma/client'
// import db from '@/server/db'

const prismaClient = new PrismaClient()

export default defineEventHandler(() => {
  const user = prismaClient.user.create({
    data: {
      providerName: null,
      providerUserId: null,
      username: 'Ryan',
      password: 'qwe123',
      avatar: ''
    }
  })

  return user
})
