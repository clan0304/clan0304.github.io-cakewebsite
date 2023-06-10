import { Box, TextField } from '@mui/material';

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box>
      <TextField
        fullWidth
        type="text"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={Boolean(touched.email) && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        sx={{ gridColumn: 'span 2' }}
      />
    </Box>
  );
};

export default Payment;
