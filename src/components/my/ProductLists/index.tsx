import useSwr from '@/hooks/useSwr'
import { ProductType } from '@/data/dataType'
import Image from 'next/image'
import Link from 'next/link'
import { numberFormat } from '@/utils/UtilsData'
import { BiCart } from 'react-icons/bi'

interface IProductLists {
  apiUrl?: string
}

interface APIResponse {
  productList: ProductType[]
}

export default function ProductLists(props: IProductLists) {
  const { data, error } = useSwr<APIResponse>(props.apiUrl || '/api/products')

  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {data.productList &&
        data.productList.map((product) => (
          <div key={product.id} className='group relative'>
            <div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                width={200}
                height={200}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <div className='mt-4 flex h-[5rem] justify-between'>
              <div>
                <Link href={product.href}>
                  <h3 className='text-lg font-bold text-gray-700'>{product.name}</h3>
                </Link>
                {product.discount ? (
                  <>
                    <p className='text-md mt-1 font-bold text-red-500'>
                      ฿{numberFormat(product.price - (product.price * product.discount) / 100)}
                    </p>
                    <p className='mt-1 text-sm text-gray-500 line-through'>฿{numberFormat(product.price)}</p>
                  </>
                ) : (
                  <>
                    <p className='text-md mt-1 font-bold text-red-500'>฿{numberFormat(product.price)}</p>
                  </>
                )}
                {/* <p className='mt-1 text-sm text-gray-500'>{product.color}</p> */}
              </div>
              {/* <p className='text-sm font-medium text-gray-900'>{product.price}</p> */}
              <div className='flex flex-col justify-end'>
                <button className='rounded-full bg-primary p-2'>
                  {/* <button className='rounded-full bg-primary p-2' onClick={() => dispatch(add(item))}> */}
                  <BiCart className='h-6 w-6 text-white' />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
