import React from 'react';
import { Typography, InputLabel, OutlinedInput, Box, Button, Link } from '@mui/material';

function App() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', p: 0, textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column',}}>
      <img src="/maslog.png" alt="maslog.png" style={{ width: '80%', maxWidth: '300px', height: 'auto' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
        Log In
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Please login to access your account.
      </Typography>
<form>
      <InputLabel>E-mail Address</InputLabel>
      <OutlinedInput sx={{ width: '100%', maxWidth: '400px', height: '40px', mt: 2 }} />

      <InputLabel>Password</InputLabel>
      <OutlinedInput sx={{ width: '100%', maxWidth: '400px', height: '40px', mt: 2 }} />

      <Typography sx={{ mt: 2 }}>
        <Link href="#">Forgot Password</Link>
      </Typography>

      <Button variant="contained" sx={{ width: '100%', maxWidth: '400px', height: '40px', mt: 4 }}>
        Login
      </Button>
      </form>
    </Box>
  );
}

export default App;