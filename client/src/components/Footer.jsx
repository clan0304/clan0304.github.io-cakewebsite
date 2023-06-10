import { Box, IconButton, Typography } from '@mui/material';
import { shades } from '../theme';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: shades.orange[700],
      }}
    >
      <Box
        height="180px"
        marginLeft="4rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box color="white">
          <Typography variant="h2" fontWeight="bold" mb="10px">
            TaraCake Dockland
          </Typography>
          <Typography mb="10px">800 Love Street</Typography>
          <Typography mb="10px">Dockland VIC 3008</Typography>
          <Typography mb="10px">T:03 1234 5678</Typography>
          <Typography mb="10px">F: dockland@taracake.com.au</Typography>
        </Box>

        <Box marginRight="2rem">
          <Typography color="white" fontSize="20px">
            TaraCake ©2022
          </Typography>
          <IconButton sx={{ margin: '2rem 0 0 3rem', fontSize: 'large' }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
