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
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import NextIcon from '@material-ui/icons/SkipNext';
import PrevIcon from '@material-ui/icons/SkipPrevious';
import validateStep from "../../utils/validateStep"
import axios from "axios/index";

const ON_AUTH_TOKEN = "nUfPFSTtoxH-mdu-FGtXvPy7hZK_GVHAl-rDyYI49z8";

function getSteps() {
  return [
    "Contact Information",
    "Insurance Information",
    "Capabilities",
    "Specializations",
    "Coverage Area",
    "Software"
      // ,    "Review"
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
  handleSubmit () {

      try {

        console.dir(this.state.completed)
          console.log(JSON.stringify(this.state.completed));
        if(!this.state.completed) {
            return;
        }
          const {data} = this.props
          console.info("hit", data)
          axios.defaults.headers.common['X-CSRF-Token'] = ON_AUTH_TOKEN;
          // axios.post("http://omadi-crm.test/api/network/account_new", { data })
          axios.post("https://testnetwork.omadi.com/api/network/account_new", {data})
              .then(res => {
                  console.log(`endpoint response`, res)
              })
      } catch (err) {
          console.log(`There was an error submitting the form: ${err}`)
      }
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
    // const done = this.state.activeStep.completed

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
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton color="inherit"
                                    onClick={this.handleStep(activeStep-1)}
                                    completed={this.state.completed[activeStep-1]}>
                            <PrevIcon/>
                        </IconButton>
                        <Fab color="secondary"
                             aria-label="Add"
                             className={classes.fabButton}
                            onClick={() => { this.handleSubmit(); }}
                        >
                            <DoneOutlineIcon />
                        </Fab>
                        <IconButton color="inherit"
                                    onClick={this.handleStep(activeStep+1)}
                                    completed={this.state.completed[activeStep+1]}>
                            <NextIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>        </div>
      </div>
    )
  }
}

HorizontalNonLinearStepper.propTypes = {
  classes: PropTypes.object
}

const mapStateToProps = reduxState => ({ data: reduxState.form.edit.data })


const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
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
});


export default connect(mapStateToProps)(
  withStyles(styles)(HorizontalNonLinearStepper)
)
