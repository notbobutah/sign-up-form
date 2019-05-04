import React from 'react';
import Navbar from '../components/Navbar';
import { Provider } from 'react-redux';
import configureStore from '../store';
import FormPage from '../containers/FormContainer';
import StepperPage from '../containers/Stepper';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
     <Navbar/>
     <StepperPage />
     </Provider>
);

export default App;
