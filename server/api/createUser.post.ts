import { PrismaClient } from '@prisma/client'
// import db from '@/server/db'

const prismaClient = new PrismaClient()

export default defineEventHandler( async (event) => {
  const body = await readBody(event);
  console.log(88, body);

  const user = prismaClient.user.create({
    data: {
      providerName: null,
      providerUserId: null,
      username: body.username,
      password: body.password,
      avatar: ''
    }
  })

  return user;
})
