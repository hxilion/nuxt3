import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export default defineEventHandler(() => {
  const user = prismaClient.user.create({
    data: {
      providerName: null,
      providerUserId: null,
      nickname: 'Ryan',
      email: 'lion@luckylab.page',
      password: 'qwe123',
      avatar: '',
      emailVerified: true
    }
  })

  return user
})
