import Link from 'next/link'
import { BiCaretRight } from 'react-icons/bi'

import CategoryFilters from '@/components/my/CategoryFilters'
import ProductLists from '@/components/my/ProductLists'
import Pagination from '../my/Pagination'

export default function Products() {
  return (
    <section className='section min-h-screen bg-[#fafafa]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='px-3 text-sm text-gray-700'>
          <Link href='#'>หน้าหลัก</Link>
          <BiCaretRight className='inline' />
          <Link href='#'>ตัวกรอง1</Link>
          <BiCaretRight className='inline' />
          <Link href='#'>ตัวกรอง2</Link>
        </div>
      </div>
      <CategoryFilters>
        <ProductLists apiUrl='/api/products' />
        <Pagination />
      </CategoryFilters>
    </section>
  )
}
