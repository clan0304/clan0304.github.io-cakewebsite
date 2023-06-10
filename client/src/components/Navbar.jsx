import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import { ShoppingBagOutlined, MenuOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../theme';
import { setIsCartOpen } from '../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="80px"
      backgroundColor={shades.orange[200]}
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      borderBottom={`1px solid ${shades.primary[900]}`}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.primary[600]}
        >
          <Typography variant="h2" fontWeight="bold">
            {' '}
            Tara Cake
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;