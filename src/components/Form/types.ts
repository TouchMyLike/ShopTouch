import { InputHTMLAttributes } from 'react'
import { ControllerProps, SubmitHandler } from 'react-hook-form'

/**
 *
 */
export interface PropsForm {
  header?: String | Boolean
  children: React.ReactNode
  submit?: String | Boolean
  defaultValues?: object
  onSubmit: SubmitHandler<object>
  className?: string
}

/**
 *
 */
export type PropsInput = {
  label?: string
  required?: boolean | string
  pattern?: { value: RegExp; message: string }
  onChange?: (...event: any[]) => void
} & Omit<ControllerProps, 'render'> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'required' | 'pattern'>

export type PropsInputWithOptions = {
  options: Array<{ value: string; label: string }>
} & PropsInput
