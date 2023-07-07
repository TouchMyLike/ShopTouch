import React, { Children } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { PropsForm, PropsInput, PropsInputWithOptions } from './types'
/**
 * show detail about Form
 * [name] in children should be unique
 */
export default function Form(props: PropsForm) {
  const { defaultValues, children, onSubmit, className } = props

  const { handleSubmit, control } = useForm({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`mx-auto max-w-lg ${className}`} noValidate>
      {children &&
        Children.map(children, (child) =>
          React.isValidElement(child) && child.type
            ? React.createElement(child.type, {
                ...child.props,
                key: child.props.name,
                control,
              })
            : child
        )}
    </form>
  )
}

export function InputText(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
          pattern: props.pattern,
          validate: (value) => {
            if (props.type === 'number' && (value < props.min! || value > props.max!)) {
              return 'Value is outside the allowed range'
            }
            return true
          },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type={props.type || 'text'}
              value={props.value || value || ''}
              min={props.type == 'number' ? props.min : undefined}
              max={props.type == 'number' ? props.max : undefined}
              checked={props.type == 'checkbox' ? props.checked : undefined}
              required={!!props.required}
              onChange={(e) => {
                onChange(e)
                if (props.onChange) props.onChange(e)
              }}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputEmail(props: PropsInput) {
  return (
    <InputText
      {...props}
      type='email'
      pattern={{
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: 'Invalid email address',
      }}
    />
  )
}

export function InputPassword(props: PropsInput) {
  return <InputText {...props} type='password' />
}

export function InputNumber(props: PropsInput) {
  return <InputText {...props} type='number' pattern={{ value: /^\d+$/, message: 'Please enter a valid number' }} />
}

export function InputCheckbox(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue || false}
        rules={{ required: props.required }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 flex items-center'>
              <input type='checkbox' onChange={onChange} onBlur={onBlur} checked={value} ref={ref} className='mr-2' />
              {props.label || props.name}
            </label>
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputRadio(props: PropsInputWithOptions) {
  const defaultOption = props.options && props.options.length > 0 ? props.options[0].value : ''

  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue || defaultOption}
        rules={{
          required: props.required,
          pattern: props.pattern,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block'>{props.label || props.name}</label>
            {props.options.map((option) => (
              <label key={option.value} className='flex items-center'>
                <input
                  type='radio'
                  value={option.value}
                  onChange={onChange}
                  onBlur={onBlur}
                  checked={option.value === value}
                  className='mr-2'
                />
                {option.label}
              </label>
            ))}
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputSelect(props: PropsInputWithOptions) {
  const defaultOption = props.options && props.options.length > 0 ? props.options[0].value : ''

  return (
    <div className='mb-4'>
      <label className='mb-2 block' htmlFor={props.id || props.name}>
        {props.label || props.name}
      </label>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue || defaultOption}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <select
              id={props.id || props.name}
              name={props.name}
              value={value}
              required={!!props.required}
              onBlur={onBlur}
              onChange={onChange}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
            >
              {props.options &&
                props.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
            </select>
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputTextarea(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
          pattern: props.pattern,
          validate: (value) => {
            if (props.maxLength && value.length > props.maxLength) {
              return `Maximum ${props.maxLength} characters allowed`
            }
            return true
          },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <textarea
              id={props.id || props.name}
              name={props.name}
              value={value || ''}
              required={!!props.required}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
              maxLength={props.maxLength}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputDate(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type='date'
              value={value || ''}
              required={!!props.required}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputFile(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue || ''}
        rules={{
          required: props.required ? 'This field is required' : false,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type='file'
              required={!!props.required}
              onChange={(e) => {
                onChange(e.target.files && e.target.files[0])
              }}
              onBlur={onBlur}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
              ref={ref}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputTime(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type='time'
              value={value || ''}
              required={!!props.required}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputColor(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type='color'
              value={value || ''}
              required={!!props.required}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full rounded-md border focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}

export function InputRange(props: PropsInput) {
  return (
    <div className='mb-4'>
      <Controller
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <>
            <label className='mb-2 block' htmlFor={props.id || props.name}>
              {props.label || props.name}
            </label>
            <input
              id={props.id || props.name}
              name={props.name}
              type='range'
              value={value || ''}
              required={!!props.required}
              onChange={onChange}
              onBlur={onBlur}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none ${
                error ? 'ring-2 ring-red-500' : 'ring-blue-400 focus:ring-2'
              }`}
              min={props.min}
              max={props.max}
              step={props.step}
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </>
        )}
      />
    </div>
  )
}
