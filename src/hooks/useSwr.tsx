import useSWR from 'swr'

interface IUseSwrReturn<Data> {
  data: Data | undefined
  error: any
  isLoading: boolean
}

export default function useSwr<Data = any>(url: string, options?: RequestInit): IUseSwrReturn<Data> {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const res = await fetch(url, options)
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    return res.json()
  })

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
