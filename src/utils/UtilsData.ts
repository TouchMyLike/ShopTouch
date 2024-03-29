/** Check type of value is number */
export function isNumber(x: any): x is number {
  return typeof x === 'number'
}
/** Check type of value is string */
export function isString(x: any): x is string {
  return typeof x === 'string'
}
/** Check type of value is boolean */
export function isBoolean(x: any): x is boolean {
  return typeof x === 'boolean'
}
/** Check type of value is object */
export function isObject(x: any): x is object {
  return typeof x === 'object'
}

/** Format number value */
export function numberFormat(
  x: number,
  locales: Intl.LocalesArgument = 'en-US',
  options: Intl.NumberFormatOptions = { minimumFractionDigits: 2, maximumFractionDigits: 2 }
) {
  const num = x || 0
  return num.toLocaleString(locales, options)
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
// export const UtilsData = {
//   isNumber: function isNumber(x: any): x is number {
//     return typeof x === 'number'
//   },
//   isString: function isString(x: any): x is string {
//     return typeof x === 'string'
//   },
// }
