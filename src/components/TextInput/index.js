import React from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"

const TextInput = ({
  handleChange,
  label,
  value,
  id,
  addChange,
  disableInput,
  errorStatus
}) => (
  <TextField
    error={errorStatus}
    required
    id={id}
    name={id}
    label={label}
    fullWidth
    autoComplete="fname"
    onChange={event => handleChange(id, event, addChange)}
    value={value}
    disabled={disableInput}
  />
)

TextInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string
}

TextInput.defaultProps = {
  handleChange: (field, event, addChange) => {
    console.info(`New value (${field}): ${event.target.value}`)
    addChange(field, event.target.value)
  },
  label: null,
  id: null,
  value: null
}

export default TextInput
