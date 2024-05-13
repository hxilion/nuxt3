import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()
// import db from '@/server/db';
export default defineEventHandler(async (event) => {
  // const body = await readBody(event);
  const query = getQuery(event);

  const userData = await prismaClient.user.findFirst({
    where: { username: query.username as string },
  })
  

  console.log(9959, userData);

  // if (!userData) {
  //   throw createError({
  //     statusCode: 400,
  //     statusMessage: '帳號已存在'
  //   })
  // }

  return true;
})
