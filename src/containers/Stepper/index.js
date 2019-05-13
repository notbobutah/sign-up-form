import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepButton from "@material-ui/core/StepButton"
import InsuranceForm from "../../pages/InsuranceForm/index"
import AddressForm from "../../pages/AddressForm"
import ReviewForm from "../../pages/ReviewForm"
import CapabilitiesForm from "../../pages/CapabilitiesForm"
import SignupCoverageAreaForm from "../../pages/SignupCoverageAreaForm"
import SignupSoftwareForm from "../../pages/SignupSoftwareForm"
import SpecializationsForm from "../../pages/SpecializationsForm"
import validateStep from "../../utils/validateStep"
const styles = theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
})

function getSteps() {
  return [
    "Contact Information",
    "Insurance Information",
    "Capabilities",
    "Specializations",
    "Coverage Area",
    "Software",
    "Review"
  ]
}

function getStepContent(step, data, errorStatus) {
  switch (step) {
    case 0:
      return <AddressForm disableInput={false} errorStatus={errorStatus} />
    case 1:
      return <InsuranceForm disableInput={false} errorStatus={errorStatus} />
    case 2:
      // validateStep(step)
      return <CapabilitiesForm disableInput={false} errorStatus={errorStatus} />
    case 3:
      // validateStep(step)
      return <SpecializationsForm disableInput={false} />
    case 4:
      // validateStep(step)
      return (
        <SignupCoverageAreaForm
          disableInput={false}
          errorStatus={errorStatus}
        />
      )
    case 5:
      // validateStep(step)
      return (
        <SignupSoftwareForm disableInput={false} errorStatus={errorStatus} />
      )
    case 6:
      // validateStep(step)
      return <ReviewForm />
    default:
      return "Unknown step"
  }
}

class HorizontalNonLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    errorStatus: false,
    completed: {}
  }

  totalSteps = () => getSteps().length

  // handleNext = () => {
  //   let activeStep

  //   if (this.isLastStep() && !this.allStepsCompleted()) {
  //     // It's the last step, but not all steps have been completed,
  //     // find the first step that has been completed
  //     const steps = getSteps()
  //     activeStep = steps.findIndex((step, i) => !(i in this.state.completed))
  //   } else {
  //     activeStep = this.state.activeStep + 1
  //   }
  //   // this.setState({
  //   //   activeStep
  //   // })
  // }

  // handleBack = () => {
  //   this.setState(state => ({
  //     activeStep: state.activeStep - 1
  //   }))
  // }

  handleStep = step => () => {
    // This verifies that all fields are entered before jumping to the next or prev step
    const errorStatus = validateStep(this.state.activeStep, this.props.data)
    if (errorStatus) {
      this.setState({ errorStatus: errorStatus })
    } else {
      this.setState({ errorStatus: errorStatus })
      this.setState({
        activeStep: step
      })
    }
  }

  handleComplete = () => {
    const { completed } = this.state
    completed[this.state.activeStep] = true
    this.setState({
      completed
    })
    this.handleNext()
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {}
    })
  }

  completedSteps() {
    return Object.keys(this.state.completed).length
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps()
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} style={{ overflow: "auto" }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={this.handleStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div style={{ width: "90%", marginLeft: "5%" }}>
          {getStepContent(activeStep, this.props.data, this.state.errorStatus)}
        </div>
      </div>
    )
  }
}

HorizontalNonLinearStepper.propTypes = {
  classes: PropTypes.object
}

const mapStateToProps = reduxState => ({ data: reduxState.form.edit.data })

export default connect(mapStateToProps)(
  withStyles(styles)(HorizontalNonLinearStepper)
)
