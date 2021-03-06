import React, { Component } from "react"
import { connect } from "react-redux"
import InsuranceForm from "../InsuranceForm"
import AddressForm from "../AddressForm"
import Button from "@material-ui/core/Button"
import axios from "axios"
import CapabilitiesForm from "../CapabilitiesForm"
import SignupCoverageAreaForm from "../SignupCoverageAreaForm"
import SignupSoftwareForm from "../SignupSoftwareForm"
import SpecializationsForm from "../SpecializationsForm"
import Typography from "@material-ui/core/Typography"

const ON_AUTH_TOKEN = "nUfPFSTtoxH-mdu-FGtXvPy7hZK_GVHAl-rDyYI49z8";

class ReviewForm extends Component {
  handleSubmit = () => {
    try {
      const { data } = this.props
      console.info("hit", data)
        axios.defaults.headers.common['X-CSRF-Token'] = ON_AUTH_TOKEN;
        // axios.post("http://omadi-crm.test/api/network/account_new", { data })
        axios.post("https://testnetwork.omadi.com/api/network/account_new", { data })
           .then(res => {
            console.log(`endpoint response`, res)
            //Process continues
           })
    } catch (err) {
      console.log(`There was an error submitting the form: ${err}`)
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h4">Review your Application Data</Typography>
        <AddressForm disableInput={true} />
        <InsuranceForm disableInput={true} />
        <CapabilitiesForm disableInput={true} />
        <SpecializationsForm disableInput={true} />
        <SignupCoverageAreaForm disableInput={true} />
        <SignupSoftwareForm disableInput={true} />

        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}

// ReviewForm.defaultProps = {
//   formView: null,
//   formEdit: null,
//   hasChanged: true,
// };
const mapStateToProps = state => ({
  data: state.form.edit.data
})

export default connect(mapStateToProps)(ReviewForm)
