import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const createProductSchema = yup.object().shape({
  productName: yup.string().required('required'),
  price: yup.number().required('required'),
  description: yup.string().required('required'),
  category: yup.string().required('required'),
  picture: yup.string().required('required'),
});

const initialValues = {
  productName: '',
  price: 0,
  description: '',
  category: '',
  picture: '',
};

const CreateProduct = () => {
  const navigate = useNavigate();

  const handleSubmitForm = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append('picturePath', values.picture.name);

    await axios.post('http://localhost:8000/createproduct', formData);
    onSubmitProps.resetForm();
    navigate('/products');
    alert('item is created!');
  };

  return (
    <Formik
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validationSchema={createProductSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          >
            <TextField
              label="Product Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.productName}
              name="productName"
              error={
                Boolean(touched.productName) && Boolean(errors.productName)
              }
              helperText={touched.productName && errors.productName}
              sx={{ gridColumn: 'span 2' }}
            />
            <TextField
              label="Description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              name="description"
              error={
                Boolean(touched.description) && Boolean(errors.description)
              }
              helperText={touched.description && errors.description}
              sx={{ gridColumn: 'span 2' }}
            />
            <TextField
              label="Price"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.price}
              name="price"
              error={Boolean(touched.price) && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              sx={{ gridColumn: 'span 2' }}
            />
            <TextField
              select
              label="Category"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.category}
              name="category"
              error={Boolean(touched.category) && Boolean(errors.category)}
              helperText={touched.category && errors.category}
              sx={{ gridColumn: 'span 2' }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Popular">Popular</MenuItem>
            </TextField>
            <Box gridColumn="span 4" borderRadius="5px" p="1rem">
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue('picture', acceptedFiles[0])
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border="2px"
                    p="1rem"
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                  >
                    <input {...getInputProps()} />
                    {!values.picture ? (
                      <p>Add Picture Here</p>
                    ) : (
                      <Box>
                        <Typography>{values.picture.name}</Typography>
                        <EditOutlinedIcon />
                      </Box>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default CreateProduct;
