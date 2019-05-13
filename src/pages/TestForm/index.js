import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import TextInput from '../../components/TextInput'
// import './index.css'

class TestForm extends Component {
    render() {
        const {disableInput} = this.props
        return (
            <div id='q-and-a-wrapper'>
                <Typography variant='h3'>Insurance</Typography>       
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                            Do you have Commercial General Liability or Garage Liability and $100K Automobile Liability?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                    <TextInput
                            required
                            id="liability"
                            name="liability"
                            fullWidth
                            autoComplete="liability"
                            // addChange={addChange}
                            // value={data.liability}
                            disableInput={disableInput}
                        />
                    </div>
                </div> 
                {/* Next Question     */}
                <div className='q-and-a-container'>
                    <div className='question-container'>
                        <Typography variant='body1'>
                            Do you have Commercial General Liability or Garage Liability and $100K Automobile Liability?
                        </Typography>
                    </div>
                    <div className='answer-container'>
                        <TextInput
                            required
                            id="liability"
                            name="liability"
                            fullWidth
                            autoComplete="liability"
                            // addChange={addChange}
                            // value={data.liability}
                            disableInput={disableInput}
                        />
                    </div>
                </div>     
            </div>
        );
    }
}

export default TestForm;