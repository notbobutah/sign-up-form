import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import SaveBar from '../../components/SaveBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { getFormView, getFormEdit, getHasChanged } from "../../store/form/selectors";
import { setupForm, saveForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';

class SignupSoftwareForm extends Component {
    componentWillMount() {
      this.props.setUpEditableForm();
    }
    
    render() {
      const {
        addChange,
        discardChanges,
        formView,
        formEdit,
        hasChanged,
        saveChanges,
      } = this.props;
      
      if (!formEdit || !formView) {
        return <span>LOADING</span>;
      }
      return (
        <div align="center">
              <React.Fragment>
              <Typography variant="h6" gutterBottom>
              SignupSoftware Form
              </Typography>
              <Grid container justify="center" spacing={24}   sm={12}>
                  <Grid item xs={12} sm={12}>
                      <TextInput
                      required
                      id="signupsoftware"
                      name="signupsoftware"
                      label="Which Software do you use?"
                      fullWidth
                      autoComplete="signupsoftware"
                      />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                  <TextInput
                      required
                      id="learnsoftware"
                      name="learnsoftware"
                      label="Would you be interested in learning more about Omadi's towing management software?"
                      fullWidth
                      autoComplete="learnsoftware"
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
                  />
                  </Grid>
                  <Grid item xs={12}  sm={8}>
                  <TextInput
                      required
                      id="currentsoftware"
                      name="currentsoftware"
                      label="Do you currently use a towing management software?"
                      fullWidth
                      autoComplete="currentsoftware"
                      handleChange={()=>addChange('field', this.value)}
                      />
                  </Grid>
                  
              </Grid>
          <Grid  item xs={12} sm={8}>
              <SaveBar
              onDiscardAction={discardChanges}
              open={1}
              //open={hasChanged}
              onSaveAction={saveChanges}
              />
          </Grid>
        </React.Fragment>
      </div>
      )
    }
  }
  
  SoftwareSignupForm.propTypes = {
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
  
  SoftwareSignupForm.defaultProps = {
    formView: null,
    formEdit: null,
    hasChanged: true,
  };
  
  const mapStateToProps = state => ({
    formView: getFormView(state),
    formEdit: getFormEdit(state),
    hasChanged: getHasChanged(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    addChange: (fieldName, fieldValue) => dispatch(addChange(fieldName, fieldValue)),
    discardChanges: () => dispatch(setupForm()),
    saveChanges: () => dispatch(saveForm()),
    setUpEditableForm: () => dispatch(setupForm()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SoftwareSignupForm);
  