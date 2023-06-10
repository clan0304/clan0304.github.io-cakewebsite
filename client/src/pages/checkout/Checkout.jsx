import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import Shipping from './Shipping';
import Payment from './Payment';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  country: '',
  street1: '',
  street2: '',
  city: '',
  state: '',
  zipCode: '',
  email: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  phoneNumber: yup.string().required('required'),
  country: yup.string().required('required'),
  street1: yup.string().required('required'),
  street2: yup.string(),
  city: yup.string().required('required'),
  state: yup.string().required('required'),
  zipCode: yup.string().required('required'),
  email: yup.string().required('required!'),
});

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, action) => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: '20px 0' }}>
        <Step>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              )}
              <Box
                display="flex"
                justifyContent="space-between"
                gap="50px"
                marginTop="30px"
              >
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  {!isSecondStep ? 'Next' : 'Place Order'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
