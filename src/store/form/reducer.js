import { combineReducers } from "redux"
import * as constants from "./constants"

const initialState = {
  view: {
    status: null,
    data: {
      //Address Form
      firstName: "",
      lastName: "",
      companyName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      yearsInBusiness: "",
      //Insurance Form
      liability: "",
      agentName: "",
      agentEmail: "",
      //Specializations Form
      autoBodyDealer: false,
      salvage: false,
      auctionTransport: false,
      insurance: false,
      heavyDuty: false,
      jumpstartBattery: false,
      batteryInstall: false,
      tireChange: false,
      fuelDelivery: false,
      lockout: false,
      //Capabilities Form
      impoundSize: "",
      impoundCount: "",
      lightDutyOrWrecker: "",
      flatBedTow1Car: "",
      flatBedTow2Car: "",
      flatBedTow3Car: "",
      fourCarHauler: "",
      serviceVehicle: "",
      heavyDutyWrecker: "",
      rotator: "",
      tractor: "",
      landollTrailer: "",
      lowboyTrailer: "",
      otherEquipment: "",
      //Coverage Area
      leaveCoverageArea: "",
      travel: "",
      hours: "",
      //Software
      currentSoftware: "",
      learnSoftware: "",
      subscribe: ""
    }
  },
  edit: {
    status: null,
    data: null,
    changed: null
  }
}

function viewReducer(state = initialState.view, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form
      }
    default:
      return state
  }
}

function editReducer(state = initialState.edit, action) {
  // console.log('hit', state, action)
  switch (action.type) {
    case constants.ADD_CHANGE:
      const newForm = { ...state.data }
      newForm[action.fieldName] = action.fieldValue
      return {
        ...state,
        changed: true,
        data: newForm
      }
    case constants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form
      }
    case constants.EDIT_FORM_PENDING:
      return {
        ...state,
        status: constants.EDIT_FORM_PENDING
      }
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: false,
        data: action.form,
        status: constants.EDIT_FORM_SUCCESS
      }
    default:
      return state
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer
})
