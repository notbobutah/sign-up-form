import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import SaveBar from '../../components/SaveBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class AddressForm extends Component {
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
            {formView.title} 
            </Typography>
            <Grid container justify="center" spacing={24}   sm={8}>
                <Grid item xs={12} sm={8}>
                    <TextInput
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
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
                    />
                </Grid>
                <Grid item xs={12}  sm={8}>
                <TextInput
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                    // handleChange={addChange('field', this.value)}
                    />
                </Grid>
                <Grid item xs={12}  sm={8}>
                <TextInput
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                    // handleChange={addChange('field', this.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                    // handleChange={addChange('field', this.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput 
                    id="state" 
                    name="state" 
                    label="State/Province/Region" 
                    fullWidth 
                    // handleChange={addChange('field', this.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                />
                </Grid>
                <Grid item xs={12} sm={8}>
                <TextInput
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="billing country"
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

AddressForm.propTypes = {
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

AddressForm.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true,
};

export default AddressForm;
