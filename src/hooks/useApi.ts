interface itemsType {
  name: string
}

interface categoriesType {
  state: string
  error: string
  data: {
    categories: {
      name: string;
      subcategories: string[],
      items: itemsType[]
    }[]
  } | null
}

export const categoriesData: categoriesType['data'] = {
  categories: [
    {
      name: 'ซูเปอร์มาร์เก็ต',
      subcategories: [

      ],
      items: [
        {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        }, {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        }, {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        },
        {
          name: 'พนมรุ้ง'
        }
      ]
    },
    {
      name: 'ความงาม',
      subcategories: [

      ],
      items: [
      ]
    },
    {
      name: 'สุขภาพ',
      subcategories: [],
      items: [
      ]
    },
    {
      name: 'เครื่องใช้ไฟฟ้า',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'บ้านเเละสวน',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'ผลิตภัณฑ์',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'เเม่เเละเด็ก ผู้สูงอายุ',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'ไอที&กล้อง',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'มือถือเเละ',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'เเฟชั่น',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'หนังสือ',
      subcategories: [
      ],
      items: [
      ]
    },
    {
      name: 'สินค้า SMEs',
      subcategories: [
      ],
      items: [
      ]
    },
  ],
  // priceRange: ['ไม่เกิน 100 บาท', '100 - 300 บาท', '300 - 600 บาท', 'มากกว่า 600 บาท'],
}