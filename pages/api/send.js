// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import send from "../../config/axios"

export default async (req, res) => {
  await send(req.body.endpoint, req.body.data)

  res.statusCode = 200
  res.end()
}
