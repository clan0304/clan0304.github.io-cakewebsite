import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { shades } from '../theme';

const Navbar = () => {
  const navigate = useNavigate();
  const NavButton = styled(Button)({
    '&:hover': { cursor: 'pointer' },
  });

  return (
    <Box
      display="flex"
      position="sticky"
      alignItems="center"
      width="100%"
      height="90px"
      backgroundColor={shades.primary[100]}
      color="white"
      marginBottom="20px"
      zIndex="1"
    >
      <Box
        justifyContent="space-between"
        margin="auto"
        columnGap="30px"
        zIndex="2"
        width="80%"
        alignItems="center"
      >
        <NavButton onClick={() => navigate('/')}>Home</NavButton>
        <NavButton onClick={() => navigate('/products')}>Products</NavButton>
        <NavButton onClick={() => navigate('/createproduct')}>
          Create Products
        </NavButton>
      </Box>
    </Box>
  );
};

export default Navbar;
