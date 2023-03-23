import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { add, cartItemType } from '@/store/features/cartSlice'
import { items } from '@/assets/datas/product'
import defaultImage from '@/assets/images/default_image.png'
import { isObject, numberFormat } from '@/utils/UtilsData'

interface IShoppingItemId {
  product: cartItemType
}
export default function ShoppingItemId(props: IShoppingItemId) {
  const dispatch = useDispatch()
  const item = props.product
  if (!item) return <>404 page</>
  const { name, image, imageSrc, imageAlt, price, discount } = item
  const pImage = image || imageSrc || defaultImage
  const pImageAlt = imageAlt || 'Product'
  return (
    <>
      <Navbar />
      <section className='section min-h-screen bg-[#fafafa]'>
        <div className='flex min-h-screen w-full items-center justify-center p-4'>
          <div className='items-center justify-center lg:flex '>
            <Image
              src={pImage}
              alt={pImageAlt}
              width={200}
              height={200}
              className='m-2 h-full w-full object-cover object-center'
            />
            <div>
              <div className='text-3xl font-extrabold'>{name}</div>
              {discount ? (
                <>
                  <p className='text-md mt-1 font-bold text-red-500'>
                    ฿{numberFormat(price - (price * discount) / 100)}
                  </p>
                  <p className='mt-1 text-sm text-gray-500 line-through'>฿{numberFormat(price)}</p>
                </>
              ) : (
                <>
                  <p className='text-md mt-1 font-bold text-red-500'>฿{numberFormat(price)}</p>
                </>
              )}
              <p className='mb-4 max-w-[400px]'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique recusandae reiciendis, ad iure
                accusantium magni, quisquam nisi asperiores incidunt quibusdam dolores deleniti. Fugiat, nisi magnam.
              </p>
              <button className='bg-black p-3 text-white' onClick={() => dispatch(add(item))}>
                หยิบใส่ตะกร้า
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context
  if (!params) return { props: {} }

  const { id } = params
  const _id = isObject(id) ? id[0] : ''
  // await db.connect()
  const product = (await items.find((item) => item.id === parseInt(_id))) || null
  // await db.disconnect()
  return {
    props: {
      product: product,
    },
  }
}
