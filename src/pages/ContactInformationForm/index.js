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

class ContactInformationForm extends Component {
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
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={8}>
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
            <Grid item xs={12} sm={8}>
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
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

ContactInformationForm.propTypes = {
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

ContactInformationForm.defaultProps = {
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
)(ContactInformationForm)
