import React  from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TextInput = ({handleChange, label, value, id}) => (
                <TextField
                    required
                    id={id}
                    name={id}
                    label={label}
                    fullWidth
                    autoComplete="fname"
                    onChange={(event) => handleChange(id, event.target.value)}
                    value={value}
                />
);


TextInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  id:  PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  handleChange: (field, val) => console.info(`New value (${field}): ${val}`),
  label: null,
  id: null,
  value: null,
};

export default TextInput;
