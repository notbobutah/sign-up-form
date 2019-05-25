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

class AddressForm extends Component {
  componentWillMount() {
    const { formEdit, formView } = this.props
    if (!formEdit || !formView) {
      this.props.setUpEditableForm()
    }
  }

  render() {
    const {
      addChange,
      formView,
      formEdit,
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
          <Typography variant="h3" gutterBottom>
            Contact Information
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={6} sm={4}>
              <TextInput
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="fname"
                addChange={addChange}
                value={data.firstName}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.firstName === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextInput
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="lname"
                addChange={addChange}
                value={data.lastName}
                disableInput={disableInput}
                errorStatus={errorStatus && data.lastName === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="companyName"
                name="companyname"
                label="Company Name"
                fullWidth
                autoComplete="companyname"
                addChange={addChange}
                value={data.companyName}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.companyName === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="yearsInBusiness"
                name="yearsinbusiness"
                label="Years in Business"
                fullWidth
                autoComplete="yearsinbusiness"
                addChange={addChange}
                value={data.yearsInBusiness}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.yearsInBusiness === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="email"
                name="email"
                label="Email Address"
                fullWidth
                autoComplete="email"
                addChange={addChange}
                value={data.email}
                disableInput={disableInput}
                errorStatus={errorStatus && data.email === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="billing address-line1"
                addChange={addChange}
                value={data.address1}
                disableInput={disableInput}
                errorStatus={errorStatus && data.address1 === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="billing address-line2"
                addChange={addChange}
                value={data.address2}
                disableInput={disableInput}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={4}>
              <TextInput
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="billing address-level2"
                addChange={addChange}
                value={data.city}
                disableInput={disableInput}
                errorStatus={errorStatus && data.city === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextInput
                id="state"
                name="state"
                label="State"
                fullWidth
                addChange={addChange}
                value={data.state}
                disableInput={disableInput}
                errorStatus={errorStatus && data.state === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextInput
                required
                id="zip"
                name="zip"
                label="Zipcode"
                fullWidth
                autoComplete="billing postal-code"
                addChange={addChange}
                value={data.zip}
                disableInput={disableInput}
                errorStatus={errorStatus && data.zip === "" ? true : false}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

AddressForm.propTypes = {
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

AddressForm.defaultProps = {
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
)(AddressForm)
