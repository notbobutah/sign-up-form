import React, { Component } from "react"
// import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import {
  getFormView,
  getFormEdit,
  getHasChanged
} from "../../store/form/selectors"
import { setupForm, saveForm } from "../../store/form/thunk"
import { addChange } from "../../store/form/actions"

const StyledFormGroup = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    paddingLeft: "4em",
    flexWrap: "nowrap"
  }
})(FormGroup)

class SpecializationsForm extends Component {
  componentWillMount() {
    const { formEdit, formView } = this.props
    if (!formEdit || !formView) {
      this.props.setUpEditableForm()
    }
  }

  handleCheck = event => {
    console.log(event.target.value, event.target.checked)
    this.props.addChange(event.target.value, event.target.checked)
  }

  render() {
    const { formView, formEdit, data, disableInput } = this.props

    if (!formEdit || !formView) {
      return <span>LOADING</span>
    }

    return (
      <div align="center">
        <React.Fragment>
          <Typography variant="h3" gutterBottom>
            Job Specializations
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" gutterBottom>
                What towing or roadside opportunities interest you?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <StyledFormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.autoBodyDealer}
                      value="autoBodyDealer"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Auto Body / Dealer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.salvage}
                      value="salvage"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Salvage"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.auctionTransport}
                      value="auctionTransport"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Auction Transport"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.insurance}
                      value="insurance"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Insurance"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.heavyDuty}
                      value="heavyDuty"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Heavy Duty"
                />
              </StyledFormGroup>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" gutterBottom>
                Which roadside services do you provide?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <StyledFormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.jumpstartBattery}
                      value="jumpstartBattery"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Jumpstart Battery"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.batteryInstall}
                      value="batteryInstall"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Battery install"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.tireChange}
                      value="tireChange"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Tire change"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.fuelDelivery}
                      value="fuelDelivery"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Fuel Delivery"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={data.lockout}
                      value="lockout"
                      onChange={event => this.handleCheck(event)}
                      disabled={disableInput}
                    />
                  }
                  label="Lockout"
                />
              </StyledFormGroup>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

// SpecializationsForm.propTypes = {
//   addChange: PropTypes.func.isRequired,
//   discardChanges: PropTypes.func.isRequired,
//   formView: PropTypes.shape({
//     label: PropTypes.string,
//     id: PropTypes.string,
//     field: PropTypes.string
//   }),
//   formEdit: PropTypes.shape({
//     label: PropTypes.string,
//     id: PropTypes.string,
//     field: PropTypes.string
//   }),
//   hasChanged: PropTypes.bool,
//   saveChanges: PropTypes.func.isRequired,
//   setUpEditableForm: PropTypes.func.isRequired
// }

// SpecializationsForm.defaultProps = {
//   formView: null,
//   formEdit: null,
//   hasChanged: true
// }

const mapStateToProps = state => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
  data: state.form.edit.data
})

const mapDispatchToProps = dispatch => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecializationsForm)
