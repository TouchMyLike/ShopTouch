import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { ProductType } from '@/data/dataType'

interface IRes {
  productList: ProductType[]
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<IRes>) {
  //Read the json data file data.json
  const fileContents = await fs.readFile('src/data/products.json', 'utf8')
  const obj = JSON.parse(fileContents) as ProductType[]

  //Return the content of the data file in json format
  res.status(200).json({ productList: obj })
}
