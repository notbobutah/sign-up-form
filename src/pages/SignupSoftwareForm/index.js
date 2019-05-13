import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { getFormView, getFormEdit, getHasChanged } from "../../store/form/selectors";
import { setupForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';

class SignupSoftwareForm extends Component {
  componentWillMount() {
    const { formEdit, formView } = this.props
    if (!formEdit || !formView) {
      this.props.setUpEditableForm(); 
    }
  }
    
    render() {
      const {
        addChange,
        formView,
        formEdit,
        data,
        disableInput
      } = this.props;
      
      if (!formEdit || !formView) {
        return <span>LOADING</span>;
      }
      return (
        <div align="center">
              <React.Fragment>
              <Typography variant="h3" gutterBottom>
              Software
              </Typography>

              <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Which Software do you use?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                      required
                      id="currentSoftware"
                      name="currentSoftware"
                      fullWidth
                      autoComplete="currentSoftware"
                      addChange={addChange}
                      value={data.currentSoftware}
                      disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
              <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Would you be interested in learning more about Omadi's towing management software?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                      required 
                      id="learnSoftware"
                      name="learnSoftware"
                      fullWidth
                      autoComplete="learnSoftware"
                      addChange={addChange}
                      value={data.learnSoftware}
                      disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                      <div className='question-container'>
                          <Typography variant='body1'>
                            Do you want to subscribe to our Driven newsletter?
                          </Typography>
                      </div>
                      <div className='answer-container'>
                      <TextInput
                        required
                        id="subscribe"
                        name="subscribe"
                        fullWidth
                        autoComplete="subscribe"
                        addChange={addChange}
                        value={data.subscribe}
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
  });
  
  const mapDispatchToProps = dispatch => ({
    addChange: (fieldName, fieldValue) => dispatch(addChange(fieldName, fieldValue)),
    setUpEditableForm: () => dispatch(setupForm()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignupSoftwareForm);
  