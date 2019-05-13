import React, { Component } from "react"
import PropTypes from "prop-types"
import TextInput from "../../components/TextInput"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"
import {
  getFormView,
  getFormEdit,
  getHasChanged
} from "../../store/form/selectors"
import { setupForm, saveForm } from "../../store/form/thunk"
import { addChange } from "../../store/form/actions"
import "./index.css"

class InsuranceForm extends Component {
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
          <div id="q-and-a-wrapper">
            <Typography variant="h3">Insurance</Typography>
            <div className="q-and-a-container">
              <div className="question-container">
                <Typography variant="body1">
                  Do you have Commercial General Liability or Garage Liability
                  and $100K Automobile Liability?
                </Typography>
              </div>
              <div className="answer-container">
                <TextInput
                  required
                  id="liability"
                  name="liability"
                  fullWidth
                  autoComplete="liability"
                  addChange={addChange}
                  value={data.liability}
                  disableInput={disableInput}
                  errorStatus={
                    errorStatus && data.liability === "" ? true : false
                  }
                />
              </div>
            </div>
            {/* Next Question     */}
            <div className="q-and-a-container">
              <div className="question-container">
                <Typography variant="body1">
                  What is your Insurance Agent's Name?
                </Typography>
              </div>
              <div className="answer-container">
                <TextInput
                  required
                  id="agentName"
                  name="agentName"
                  fullWidth
                  autoComplete="agentname"
                  addChange={addChange}
                  value={data.agentName}
                  disableInput={disableInput}
                  errorStatus={
                    errorStatus && data.agentName === "" ? true : false
                  }
                />
              </div>
            </div>
            {/* Next Question     */}
            <div className="q-and-a-container">
              <div className="question-container">
                <Typography variant="body1">
                  Do you currently use a towing management software?
                </Typography>
              </div>
              <div className="answer-container">
                <TextInput
                  required
                  id="agentEmail"
                  name="agentEmail"
                  fullWidth
                  autoComplete="agentemail"
                  addChange={addChange}
                  value={data.agentEmail}
                  disableInput={disableInput}
                  errorStatus={
                    errorStatus && data.agentEmail === "" ? true : false
                  }
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    )
  }
}

InsuranceForm.propTypes = {
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

InsuranceForm.defaultProps = {
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
)(InsuranceForm)
