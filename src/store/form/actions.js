/**
 * @author Pierre Segonne
 * Date: 17/04/2018
 */
import * as constants from './constants';

export const addChange = (fieldName, fieldValue) => {
  // console.log('hit222',fieldName, fieldValue)
  return{
    type: constants.ADD_CHANGE,
    fieldName,
    fieldValue
  }
};

export const setNewEditableForm = form => ({
  type: constants.SET_UP_EDIT_FORM,
  form,
});


export const editFormPending = () => ({
  type: constants.EDIT_FORM_PENDING,
});

export const editFormSuccess = form => ({
  type: constants.EDIT_FORM_SUCCESS,
  form
});
