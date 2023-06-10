import { Box, TextField } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

const Shipping = ({ values, touched, errors, handleBlur, handleChange }) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name="firstName"
        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name="lastName"
        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        sx={{ gridColumn: 'span 2' }}
      />

      <TextField
        fullWidth
        type="text"
        label="Phone Number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNumber}
        name="phoneNumber"
        error={Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)}
        helperText={touched.phoneNumber && errors.phoneNumber}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name="country"
        error={Boolean(touched.country) && Boolean(errors.country)}
        helperText={touched.country && errors.country}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street 1"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name="street1"
        error={Boolean(touched.street1) && Boolean(errors.street1)}
        helperText={touched.street1 && errors.street1}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Street 2"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name="street2"
        error={Boolean(touched.street2) && Boolean(errors.street2)}
        helperText={touched.street2 && errors.street2}
        sx={{ gridColumn: 'span 2' }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name="city"
        error={Boolean(touched.city) && Boolean(errors.city)}
        helperText={touched.city && errors.city}
        sx={{ gridColumn: 'span 1' }}
      />
      <TextField
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name="state"
        error={Boolean(touched.state) && Boolean(errors.state)}
        helperText={touched.state && errors.state}
        sx={{ gridColumn: 'span 1' }}
      />
      <TextField
        fullWidth
        type="text"
        label="Zip code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name="zipCode"
        error={Boolean(touched.zipCode) && Boolean(errors.zipCode)}
        helperText={touched.zipCode && errors.zipCode}
        sx={{ gridColumn: 'span 2' }}
      />
    </Box>
  );
};

export default Shipping;
