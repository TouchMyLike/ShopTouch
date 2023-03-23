import { cloneElement } from 'react'

interface BadgeType {
  max?: number
  value: number
  showzero?: boolean
  className?: string
  bgColor?: string
  icon?: any
}

export function Badge(props: BadgeType) {
  const max = props.max || 99 //default is 99
  const value = String(props.value > max ? max + '+' : props.value)
  const showValue = value == '0' ? props.showzero : true
  const value_length = value.length

  if (props.icon)
    return (
      <span className={`inline-block ${props.className}`}>
        <div className={`relative `}>
          {cloneElement(props.icon, { className: `h-[35px] w-[35px] fill-gray-500 cursor-pointer` })}
          {showValue && (
            <span
              className={`absolute top-[0.25rem] right-0 !m-0 h-[1.5rem] min-w-[1.5rem] -translate-y-1/2 
            translate-x-1/2 select-none rounded-full bg-black text-center 
            text-[0.75rem] font-bold leading-[1.5rem] text-white 
            ${value_length ? '!py-0 !px-[0.5rem]' : '!p-0'}
            ${props.className}
            ${props.bgColor}`}
            >
              {value}
            </span>
          )}
        </div>
      </span>
    )

  return (
    <span
      className={`inline-block h-[1.5rem] min-w-[1.5rem] select-none rounded-full bg-black text-center text-[0.75rem] font-bold leading-[1.5rem] text-white 
      ${value_length ? '!py-0 !px-[0.5rem]' : '!p-0'} 
      ${props.className}
      ${props.bgColor}`}
    >
      {value}
      <></>
    </span>
  )
}
