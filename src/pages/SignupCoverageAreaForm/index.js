import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
// import SaveBar from '../../components/SaveBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { getFormView, getFormEdit, getHasChanged } from "../../store/form/selectors";
import { setupForm, saveForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';


class SignupCoverageAreaForm extends Component {
  componentWillMount() {
    const { formEdit, formView } = this.props
    if (!formEdit || !formView) {
      this.props.setUpEditableForm(); 
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
      disableInput
    } = this.props;
    
    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div align="center">
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
            Signup Coverage Area Form
            </Typography>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={12}>
                    <TextInput
                    required
                    id="coveragearea"
                    name="coveragearea"
                    label="Are you willing to leave your coverage area?"
                    fullWidth
                    autoComplete="coveragearea"
                    addChange={addChange}
                    value={data.liability}
                    disableInput={disableInput}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="travel"
                    name="travel"
                    label="How many miles are you willing to travek from your home location?"
                    fullWidth
                    autoComplete="travel"
                    addChange={addChange}
                    value={data.agentName}
                    disableInput={disableInput}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="hours"
                    name="hours"
                    label="What are your service hours?"
                    fullWidth
                    autoComplete="hours"
                    addChange={addChange}
                    value={data.agentEmail}
                    disableInput={disableInput}
                />
                </Grid>
                <Grid item xs={12}  sm={8}>
                <TextInput
                    required
                    id="yard"
                    name="yard"
                    label="Do you have a storage yard?"
                    fullWidth
                    autoComplete="yard"
                    addChange={addChange}
                    value={data.software}
                    disableInput={disableInput}
                    />
                    
                </Grid>
                
            </Grid>
        <Grid  item xs={12} sm={8}>
            {/* <SaveBar
            onDiscardAction={discardChanges}
            open={1}
            //open={hasChanged}
            onSaveAction={saveChanges}
            /> */}
        </Grid>
      </React.Fragment>
    </div>
    )
  }
}

SignupCoverageAreaForm.propTypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges : PropTypes.func.isRequired,
  formView: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string,
    field: PropTypes.string,
  }),
  formEdit: PropTypes.shape({
    label: PropTypes.string,
    id : PropTypes.string,
    field: PropTypes.string,
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired,
};

SignupCoverageAreaForm.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true,
};

const mapStateToProps = state => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state),
  data: state.form.edit.data
});

const mapDispatchToProps = dispatch => ({
  addChange: (fieldName, fieldValue) => dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupCoverageAreaForm);
