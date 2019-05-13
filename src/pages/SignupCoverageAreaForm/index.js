import React, { Component } from "react"
import PropTypes from "prop-types"
import TextInput from "../../components/TextInput"
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

class SignupCoverageAreaForm extends Component {
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
            Coverage Area
          </Typography>
          <Grid container justify="center" spacing={24}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                Are you willing to leave your coverage area?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="leaveCoverageArea"
                name="leaveCoverageArea"
                autoComplete="leaveCoverageArea"
                addChange={addChange}
                value={data.leaveCoverageArea}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.leaveCoverageArea === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                How many miles are you willing to travel from your home
                location?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="travel"
                name="travel"
                autoComplete="travel"
                addChange={addChange}
                value={data.travel}
                disableInput={disableInput}
                errorStatus={errorStatus && data.travel === "" ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                What are your service hours?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="hours"
                name="hours"
                autoComplete="hours"
                addChange={addChange}
                value={data.hours}
                disableInput={disableInput}
                errorStatus={errorStatus && data.hours === "" ? true : false}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

SignupCoverageAreaForm.propTypes = {
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

SignupCoverageAreaForm.defaultProps = {
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
)(SignupCoverageAreaForm)
