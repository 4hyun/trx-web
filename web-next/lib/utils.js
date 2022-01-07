export const getPageHeight = () => document && document.body.clientHeight

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const defaultScrollOptions = { behavior: 'smooth' }
export const scrollTo = (options = {}) => {
  window.scrollTo({ ...defaultScrollOptions, ...options })
}

export const srcSetMapFn = (formatKey, formats) => {
  const { url, width } = formats[formatKey]
  return `${url} ${width}w, `
}

export const range = (end, start = 1) => {
  const result = []
  for (let i = start; i <= end; i += 1) {
    result.push(i)
  }
  return result
}
