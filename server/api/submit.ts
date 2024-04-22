export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const cookies = parseCookies(event)
  console.log(cookies)
  return {
    ok: true,
    data: body
  }
})
