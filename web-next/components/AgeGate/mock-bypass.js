import {
  AGE_GATE_DOB_LS_KEY,
  AGE_GATE_LS_KEY,
  AGE_GATE_PROV_LS_KEY,
} from './constants'

const createMockBypass = () => {
  console.log('>> createMockBypass()')
  window.localStorage.setItem(AGE_GATE_DOB_LS_KEY, '1978-11-28')
  window.localStorage.setItem(AGE_GATE_PROV_LS_KEY, 'NS')
  window.localStorage.setItem(AGE_GATE_LS_KEY, new Date().getTime())
}

export default createMockBypass
