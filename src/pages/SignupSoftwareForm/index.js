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

class SignupSoftwareForm extends Component {
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
            Software
          </Typography>
          <Grid container justify="center">
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="currentSoftware"
                name="currentSoftware"
                label="Which Software do you use?"
                fullWidth
                autoComplete="currentSoftware"
                addChange={addChange}
                value={data.currentSoftware}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.currentSoftware === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <TextInput
                required
                id="learnSoftware"
                name="learnSoftware"
                label="Learn more"
                helperText="Would you be interested in learning more about Omadi's towing management software?"
                fullWidth
                autoComplete="learnSoftware"
                addChange={addChange}
                value={data.learnSoftware}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.learnSoftware === "" ? true : false
                }
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInput
                required
                id="subscribe"
                name="subscribe"
                label="Do you want to subscribe to our Driven newsletter?"
                fullWidth
                autoComplete="subscribe"
                addChange={addChange}
                value={data.subscribe}
                disableInput={disableInput}
                errorStatus={
                  errorStatus && data.subscribe === "" ? true : false
                }
              />
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    )
  }
}

SignupSoftwareForm.propTypes = {
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

SignupSoftwareForm.defaultProps = {
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
)(SignupSoftwareForm)
