import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import { ProductType } from '@/data/dataType'
import { join } from 'path'

interface IRes {
  productList?: ProductType[]
  error?: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<IRes>) {
  //Read the json data file data.json
  let filePath = 'src/data/products.json'

  // Use process.cwd() in production
  // if (process.env.NODE_ENV === 'production' && process.env.NOW_REGION) {
  filePath = join(process.cwd(), filePath)
  // }

  try {
    const fileContents = await fs.readFile(filePath, 'utf8')
    const obj = JSON.parse(fileContents) as ProductType[]

    //Return the content of the data file in json format
    res.status(200).json({ productList: obj })
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' })
  }
}
