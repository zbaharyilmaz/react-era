import { Box, Typography } from '@mui/material';
import Not from '../assets/404.png';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Page Not Found
      </Typography>
      <Box
        component="img"
        src={Not}
        alt="404"
        width={750}
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
    </Box>
  );
};

export default NotFound;