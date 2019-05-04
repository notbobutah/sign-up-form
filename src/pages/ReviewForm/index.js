import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import SaveBar from '../../components/SaveBar';
import {connect} from 'react-redux'
import {addChange, setNewEditableForm} from '../../store/form/actions'
import {getFormEdit, getFormView, getHasChanged} from "../../store/form/selectors";
import {saveForm, setupForm} from "../../store/form/thunk";

class ReviewForm extends Component {
  componentWillMount() {
    this.props.setNewEditableForm();
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
      return <span>LOADING ReviewForm</span>;
    }
    return (
      <div>
          <h1>Review your application data</h1>
        <TextInput
          handleChange={(newValue) => addChange('title', newValue)}
          title="Title"
          value={formEdit.title}
        />
        {/* Field */}
        <TextInput
          handleChange={(newValue) => addChange('field', newValue)}
          title="Random Field"
          value={formEdit.field}
        />
        <SaveBar
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction={saveChanges}
        />
      </div>
    )
  }
}

ReviewForm.propTypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges : PropTypes.func.isRequired,
  formView: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  formEdit: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired,
};

ReviewForm.defaultProps = {
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
    setNewEditableForm: () => dispatch(setupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
