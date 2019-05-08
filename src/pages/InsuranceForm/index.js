import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { getFormView, getFormEdit, getHasChanged } from "../../store/form/selectors";
import { setupForm, saveForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';


class InsuranceForm extends Component {
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
            <Typography variant="h5" gutterBottom>
            Insurance Form
            </Typography>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={8}>
                    <TextInput
                    required
                    id="liability"
                    name="liability"
                    label="Do you have Commercial General Liability or Garage Liability and $100K Automobile Liability?"
                    fullWidth
                    autoComplete="liability"
                    addChange={addChange}
                    value={data.liability}
                    disableInput={disableInput}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="agentName"
                    name="agentName"
                    label="What is your Insurance Agent's Name?"
                    fullWidth
                    autoComplete="agentname"
                    addChange={addChange}
                    value={data.agentName}
                    disableInput={disableInput}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="agentEmail"
                    name="agentEmail"
                    label="What is your Insurance Agent's Email?"
                    fullWidth
                    autoComplete="agentemail"
                    addChange={addChange}
                    value={data.agentEmail}
                    disableInput={disableInput}
                />
                </Grid>
                <Grid item xs={12}  sm={8}>
                <TextInput
                    required
                    id="software"
                    name="software"
                    label="Do you currently use a towing management software?"
                    fullWidth
                    autoComplete="software"
                    addChange={addChange}
                    value={data.software}
                    disableInput={disableInput}
                    />
                    
                </Grid>
                
            </Grid>
        <Grid  item xs={12} sm={8}>
        </Grid>
      </React.Fragment>
    </div>
    )
  }
}

InsuranceForm.propTypes = {
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

InsuranceForm.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceForm);
