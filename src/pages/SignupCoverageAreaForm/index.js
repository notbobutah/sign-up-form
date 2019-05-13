import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { getFormView, getFormEdit, getHasChanged } from "../../store/form/selectors";
import { setupForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';


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
            <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Are you willing to leave your coverage area?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                      required
                      id="leaveCoverageArea"
                      name="leaveCoverageArea"
                      autoComplete="leaveCoverageArea"
                      addChange={addChange}
                      value={data.leaveCoverageArea}
                      disableInput={disableInput}
                    />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                        How many miles are you willing to travel from your home location?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                      required
                      id="travel"
                      name="travel"
                      autoComplete="travel"
                      addChange={addChange}
                      value={data.travel}
                      disableInput={disableInput}
                    />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                        What are your service hours?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                      required
                      id="hours"
                      name="hours"
                      autoComplete="hours"
                      addChange={addChange}
                      value={data.hours}
                      disableInput={disableInput}
                    />
                    </div>
                </div>
      </React.Fragment>
    </div>
    )
  }
}


const mapStateToProps = state => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
  data: state.form.edit.data
})

const mapDispatchToProps = dispatch => ({
  addChange: (fieldName, fieldValue) => dispatch(addChange(fieldName, fieldValue)),
  setUpEditableForm: () => dispatch(setupForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupCoverageAreaForm)
