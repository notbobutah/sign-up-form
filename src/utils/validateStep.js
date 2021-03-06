export default function validateStep(step, data) {
  switch (step) {
    case 0:
      const {
        firstName,
        lastName,
        companyName,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        yearsInBusiness
      } = data
      const contactForm = {
        firstName,
        lastName,
        companyName,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        yearsInBusiness
      }
      for (let val in contactForm) {
        if (contactForm[val] === "") {
          alert(`please type all fields to continue`)
          return true
        }
      }
      return false
    case 1:
      const { liability, agentName, agentEmail } = data
      const insuranceForm = {
        liability,
        agentName,
        agentEmail
      }
      for (let val in insuranceForm) {
        if (insuranceForm[val] === "") {
          alert(`please type all fields to continue`)
          return true
        }
      }
      return false
    case 2:
      const {
        impoundSize,
        impoundCount,
        lightDutyOrWrecker,
        flatBedTow1Car,
        flatBedTow2Car,
        flatBedTow3Car,
        fourCarHauler,
        serviceVehicle,
        heavyDutyWrecker,
        rotator,
        tractor,
        landollTrailer,
        lowboyTrailer,
        otherEquipment
      } = data
      const capabilitiesForm = {
        impoundSize,
        impoundCount,
        lightDutyOrWrecker,
        flatBedTow1Car,
        flatBedTow2Car,
        flatBedTow3Car,
        fourCarHauler,
        serviceVehicle,
        heavyDutyWrecker,
        rotator,
        tractor,
        landollTrailer,
        lowboyTrailer,
        otherEquipment
      }
      for (let val in capabilitiesForm) {
        if (capabilitiesForm[val] === "") {
          alert(`Please type all fields to continue`)
          return true
        }
      }
      return false
    case 4:
      const { leaveCoverageArea, travel, hours } = data

      const coverageForm = {
        leaveCoverageArea,
        travel,
        hours
      }
      for (let val in coverageForm) {
        if (coverageForm[val] === "") {
          alert(`Please type all fields to continue`)
          return true
        }
      }
      return false
    case 5:
      const { currentSoftware, learnSoftware, subscribe } = data

      const softwareForm = {
        currentSoftware,
        learnSoftware,
        subscribe
      }
      for (let val in softwareForm) {
        if (softwareForm[val] === "") {
          alert(`Please type all fields to continue`)
          return true
        }
      }
      return false
    default:
      return null
  }
}
