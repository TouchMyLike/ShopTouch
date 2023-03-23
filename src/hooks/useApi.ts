import { ReactElement, useEffect, useState } from 'react'

export { HiX } from 'react-icons/hi'

interface categoriesType {
  state: string
  error: string
  data: {
    categories: { name: string; subcategories: string[] }[]
  } | null
}

export const categoriesData: categoriesType['data'] = {
  categories: [
    {
      name: 'ซูเปอร์มาร์เก็ต',
      subcategories: [

      ],
    },
    {
      name: 'ความงาม',
      subcategories: [

      ],
    },
    {
      name: 'สุขภาพ',
      subcategories: [],
    },
    {
      name: 'เครื่องใช้ไฟฟ้า',
      subcategories: [
      ],
    },
    {
      name: 'บ้านเเละสวน',
      subcategories: [
      ],
    },
    {
      name: 'ผลิตภัณฑ์',
      subcategories: [
      ],
    },
    {
      name: 'เเม่เเละเด็ก ผู้สูงอายุ',
      subcategories: [
      ],
    },
    {
      name: 'ไอที&กล้อง',
      subcategories: [
      ],
    },
    {
      name: 'มือถือเเละ',
      subcategories: [
      ],
    },
    {
      name: 'เเฟชั่น',
      subcategories: [
      ],
    },
    {
      name: 'หนังสือ',
      subcategories: [
      ],
    },
    {
      name: 'สินค้า SMEs',
      subcategories: [
      ],
    },
  ],
  // priceRange: ['ไม่เกิน 100 บาท', '100 - 300 บาท', '300 - 600 บาท', 'มากกว่า 600 บาท'],
}