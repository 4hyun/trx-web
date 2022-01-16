import { AGE_GATE_DOB_LS_KEY } from 'components/AgeGate/constants'

class AgeGateManager {
  static async setDOB(dob) {
    console.log('AgeGateManager.setDOB()')
    // localStorage.setItem(AGE_GATE_DOB_LS_KEY, dob)
    return this
  }

  static async setProvince() {
    console.log('AgeGateManager.setProvince()')
    return this
  }
}

export default AgeGateManager
