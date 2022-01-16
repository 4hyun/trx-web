import { useEffect } from 'react'

const useDevSettings = () => {
  useEffect(() => {
    console.log('useDevSettings hook called.')
    /* reset Age Gate key values */
    localStorage.clear()
  }, [])
}
export default useDevSettings
