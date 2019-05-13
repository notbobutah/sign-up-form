import React, { Component } from "react"
import PropTypes from "prop-types"
import TextInput from "../../components/TextInput"
// import SaveBar from '../../components/SaveBar';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"
import {
  getFormView,
  getFormEdit,
  getHasChanged
} from "../../store/form/selectors"
import { setupForm, saveForm } from "../../store/form/thunk"
import { addChange } from "../../store/form/actions"

class CapabilitiesForm extends Component {
  componentWillMount() {
    const { formEdit, formView } = this.props
    if (!formEdit || !formView) {
      this.props.setUpEditableForm()
    }
  }

  render() {
    const {
      addChange,
      // discardChanges,
      formView,
      formEdit,
      // hasChanged,
      // saveChanges,
      data,
      disableInput,
      errorStatus
    } = this.props
    if (!formEdit || !formView) {
      return <span>LOADING</span>
    }
    return (
      <div align="center">
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Capabilities
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">Impound/Storage Lot</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="impoundSize"
                name="impoundSize"
                label="What is the size of your lot?"
                fullWidth
                autoComplete="impoundSize"
                addChange={addChange}
                value={data.impoundSize}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.impoundSize === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="impoundCount"
                name="impoundCount"
                label="How many lots do you have?"
                fullWidth
                autoComplete="impoundCount"
                addChange={addChange}
                value={data.impoundCount}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.impoundCount === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">
                Enter a number of Trucks & Equipment
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="lightDutyOrWrecker"
                name="lightDutyOrWrecker"
                label="Light Duty Wheel Lift or Wrecker"
                fullWidth
                autoComplete="lightDutyOrWrecker"
                addChange={addChange}
                value={data.lightDutyOrWrecker}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.lightDutyOrWrecker === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="flatBedTow1Car"
                name="flatBedTow1Car"
                label="Flatbed Tow Truck - 1 Car Capacity"
                fullWidth
                autoComplete="flatBedTow1Car"
                addChange={addChange}
                value={data.flatBedTow1Car}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.flatBedTow1Car === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="flatBedTow2Car"
                name="flatBedTow2Car"
                label="Flatbed Tow Truck - 2 Car Capacity"
                fullWidth
                autoComplete="flatBedTow2Car"
                addChange={addChange}
                value={data.flatBedTow2Car}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.flatBedTow2Car === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="flatBedTow3Car"
                name="flatBedTow3Car"
                label="Flatbed Tow Truck - 3 Car Capacity"
                fullWidth
                autoComplete="flatBedTow3Car"
                addChange={addChange}
                value={data.flatBedTow3Car}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.flatBedTow3Car === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="fourCarHauler"
                name="fourCarHauler"
                label="Four Car Hauler"
                fullWidth
                autoComplete="fourCarHauler"
                addChange={addChange}
                value={data.fourCarHauler}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.fourCarHauler === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="serviceVehicle"
                name="serviceVehicle"
                label="Service Vehicle"
                fullWidth
                autoComplete="serviceVehicle"
                addChange={addChange}
                value={data.serviceVehicle}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.serviceVehicle === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="heavyDutyWrecker"
                name="heavyDutyWrecker"
                label="Heavy Duty Wrecker"
                fullWidth
                autoComplete="heavyDutyWrecker"
                addChange={addChange}
                value={data.heavyDutyWrecker}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.heavyDutyWrecker === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="rotator"
                name="rotator"
                label="rotator"
                fullWidth
                autoComplete="rotator"
                addChange={addChange}
                value={data.rotator}
                disableInput={disableInput}
                errorStatus={errorStatus && data.rotator === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="tractor"
                name="tractor"
                label="tractor"
                fullWidth
                autoComplete="tractor"
                addChange={addChange}
                value={data.tractor}
                disableInput={disableInput}
                errorStatus={errorStatus && data.tractor === "" ? true : false}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="landollTrailer"
                name="landollTrailer"
                label="Landoll Trailer"
                fullWidth
                autoComplete="landollTrailer"
                addChange={addChange}
                value={data.landollTrailer}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.landollTrailer === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="lowboyTrailer"
                name="lowboyTrailer"
                label="Lowboy Trailer"
                fullWidth
                autoComplete="lowboyTrailer"
                addChange={addChange}
                value={data.lowboyTrailer}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.lowboyTrailer === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="otherEquipment"
                name="otherEquipment"
                label="Other Equipment"
                fullWidth
                autoComplete="otherEquipment"
                addChange={addChange}
                value={data.otherEquipment}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.otherEquipment === "" ? true : false
                }
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

CapabilitiesForm.propTypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges: PropTypes.func.isRequired,
  formView: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string
  }),
  formEdit: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired
}

CapabilitiesForm.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true
}

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
)(CapabilitiesForm)
