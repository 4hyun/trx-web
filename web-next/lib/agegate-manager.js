import {
  AGE_GATE_DOB_LS_KEY,
  AGE_GATE_PROV_LS_KEY,
} from 'components/AgeGate/constants'

class AgeGateManager {
  dob
  province
  static async setDOB(dob) {
    console.log('AgeGateManager.setDOB()', dob)
    localStorage.setItem(AGE_GATE_DOB_LS_KEY, dob)
    this.dob = dob
    return this
  }

  static async setProvince(provCode) {
    console.log('AgeGateManager.setProvince()', provCode)
    localStorage.setItem(AGE_GATE_PROV_LS_KEY, provCode)
    this.province = provCode
    return this
  }
}

export default AgeGateManager
