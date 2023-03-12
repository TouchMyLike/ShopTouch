import { useEffect, useState } from 'react'

interface categoriesType {
    state: string
    error: string
    data: {
        categories: { name: string; subcategories: string[] }[]
        // priceRange: string[]
    } | null
}

export const categoriesData: categoriesType['data'] = {
    categories: [
        {
            name: 'อาหารสดเเละเบเกอรี่',
            subcategories: [

            ],
        },
        {
            name: 'ไข่ นม เเละผลิตภัณฑ์จากนม',
            subcategories: [

            ],
        },
        {
            name: 'ของเเห้งเเละเครื่องปรุง',
            subcategories: [],
        },
        {
            name: 'ขนมขบเคี้ยวเเละของหวาน',
            subcategories: [
            ],
        },
        {
            name: 'ความงามเเละของใช้ส่วนตัว',
            subcategories: [
            ],
        },
        {
            name: 'เเม่เเละเด็ก',
            subcategories: [
            ],
        },
        {
            name: 'ของใช้ในบ้าน',
            subcategories: [
            ],
        },
        {
            name: 'บ้านเเละไลฟ์สไตล์',
            subcategories: [
            ],
        },
        {
            name: 'เครื่องเขียนเเละอุปกรณ์สำนักงาน',
            subcategories: [
            ],
        },
        {
            name: 'อาหารเเละอุปกรณ์สัตว์เลี้ยง',
            subcategories: [
            ],
        },
        {
            name: 'เครื่องใช้ไฟฟ้า',
            subcategories: [
            ],
        },
        {
            name: 'เสื้อผ้า',
            subcategories: [
            ],
        },
    ],
    // priceRange: ['ไม่เกิน 100 บาท', '100 - 300 บาท', '300 - 600 บาท', 'มากกว่า 600 บาท'],
}