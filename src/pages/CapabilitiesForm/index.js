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



class CapabilitiesForm extends Component {
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
            <Typography variant="h3" gutterBottom>
            Capabilities
            </Typography>
            <Typography variant="h6" style={{marginTop:'20px', marginBottom:'10px'}}>Impound/Storage Lot</Typography>
            <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          What is the size of your lot?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        id="impoundSize"
                        name="impoundSize"
                        label=""
                        fullWidth
                        autoComplete="impoundSize"
                        addChange={addChange}
                        value={data.impoundSize}
                        disableInput={disableInput}
                      />
                    </div>
                </div> 
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          How many lots do you have?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="impoundCount"
                        name="impoundCount"
                        label=""
                        fullWidth
                        autoComplete="impoundCount"
                        addChange={addChange}
                        value={data.impoundCount}
                        disableInput={disableInput}
                      />
                    </div>
                </div> 
                {/* Next Section */}
                <Typography variant='h6'style={{marginTop:'20px', marginBottom:'10px'}}>Enter a number of Trucks & Equipment</Typography>
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Light Duty Wheel Lift or Wrecker
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="lightDutyOrWrecker"
                        name="lightDutyOrWrecker"
                        label=""
                        fullWidth
                        autoComplete="lightDutyOrWrecker"
                        addChange={addChange}
                        value={data.lightDutyOrWrecker}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Flatbed Tow Truck - 1 Car Capacity
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="flatBedTow1Car"
                        name="flatBedTow1Car"
                        label=""
                        fullWidth
                        autoComplete="flatBedTow1Car"
                        addChange={addChange}
                        value={data.flatBedTow1Car}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Flatbed Tow Truck - 2 Car Capacity
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="flatBedTow2Car"
                        name="flatBedTow2Car"
                        label=""
                        fullWidth
                        autoComplete="flatBedTow2Car"
                        addChange={addChange}
                        value={data.flatBedTow2Car}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Flatbed Tow Truck - 3 Car Capacity
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="flatBedTow3Car"
                        name="flatBedTow3Car"
                        label=""
                        fullWidth
                        autoComplete="flatBedTow3Car"
                        addChange={addChange}
                        value={data.flatBedTow3Car}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Four Car Hauler
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="fourCarHauler"
                        name="fourCarHauler"
                        label=""
                        fullWidth
                        autoComplete="fourCarHauler"
                        addChange={addChange}
                        value={data.fourCarHauler}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Service Vehicles
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="serviceVehicle"
                        name="serviceVehicle"
                        label=""
                        fullWidth
                        autoComplete="serviceVehicle"
                        addChange={addChange}
                        value={data.serviceVehicle}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Heavy Duty Wrecker
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="heavyDutyWrecker"
                        name="heavyDutyWrecker"
                        label=""
                        fullWidth
                        autoComplete="heavyDutyWrecker"
                        addChange={addChange}
                        value={data.heavyDutyWrecker}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Rotator
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="rotator"
                        name="rotator"
                        label=""
                        fullWidth
                        autoComplete="rotator"
                        addChange={addChange}
                        value={data.rotator}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Tractor
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="tractor"
                        name="tractor"
                        label=""
                        fullWidth
                        autoComplete="tractor"
                        addChange={addChange}
                        value={data.tractor}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Landoll Trailer
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="landollTrailer"
                        name="landollTrailer"
                        label=""
                        fullWidth
                        autoComplete="landollTrailer"
                        addChange={addChange}
                        value={data.landollTrailer}
                        disableInput={disableInput}
                        />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Lowboy Trailer
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="lowboyTrailer"
                        name="lowboyTrailer"
                        label=""
                        fullWidth
                        autoComplete="lowboyTrailer"
                        addChange={addChange}
                        value={data.lowboyTrailer}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
                {/* Next Question */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                          Other Equipment
                        </Typography>
                    </div>
                    <div className='answer-container'>
                      <TextInput
                        required
                        id="otherEquipment"
                        name="otherEquipment"
                        label=""
                        fullWidth
                        autoComplete="otherEquipment"
                        addChange={addChange}
                        value={data.otherEquipment}
                        disableInput={disableInput}
                      />
                    </div>
                </div>
      </React.Fragment>
    </div>
    )
  }
}

CapabilitiesForm.propTypes = {
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

CapabilitiesForm.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CapabilitiesForm);
