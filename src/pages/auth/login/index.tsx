import Form, { InputEmail, InputPassword } from '@/components/Form/Form'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function index() {
  const onSubmit = (data: object) => {
    console.log(data)
    debugger
  }
  return (
    <div>
      <Navbar />
      <main className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='w-96 rounded bg-white px-8 py-6 shadow-md'>
          <h2 className='mb-4 text-2xl font-bold'>Login</h2>
          <Form onSubmit={onSubmit} className='space-y-4'>
            <InputEmail name='email' label='Email' required />
            <InputPassword name='password' label='Password' required />

            <button
              type='submit'
              className='focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            >
              Login
            </button>
          </Form>

          <div className='mt-4 text-center'>
            <p>
              Don't have an account yet?{' '}
              <Link href='/auth/register' className='text-blue-500'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
