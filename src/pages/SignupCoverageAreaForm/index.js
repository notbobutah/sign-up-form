import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
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
      formView,
      formEdit,
      data,
      disableInput
    } = this.props;
    
    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div >
            <React.Fragment>
            <Typography variant="h5" gutterBottom>
            Coverage Area
            </Typography>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={8}>
                    <TextInput
                    required
                    id="leaveCoverageArea"
                    name="leaveCoverageArea"
                    label="Are you willing to leave your coverage area?"
                    fullWidth
                    autoComplete="leaveCoverageArea"
                    addChange={addChange}
                    value={data.leaveCoverageArea}
                    disableInput={disableInput}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="travel"
                    name="travel"
                    label="How many miles are you willing to travel from your home location?"
                    fullWidth
                    autoComplete="travel"
                    addChange={addChange}
                    value={data.travel}
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
                    value={data.hours}
                    disableInput={disableInput}
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
