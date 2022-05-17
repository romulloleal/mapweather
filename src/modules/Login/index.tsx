import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { translate } from '../../utils/Translate';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';


const SignIn = () => {

  const { signIn } = useAuth()

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString() || ''
    const password = data.get('password')?.toString() || ''

    signIn(email, password)
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '400px', mt: 1, padding: '20px' }}>
        <TextField
          type="email"
          variant='outlined'
          name="email"
          margin="normal"
          autoCapitalize="none"
          fullWidth
          label={translate.email}
          autoFocus
        />
        <TextField
          type="password"
          variant='outlined'
          margin="normal"
          name="password"
          fullWidth
          label={translate.password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
        >
          {translate.signIn}
        </Button>
      </Box>

      <Link variant="body2" underline="none" onClick={() => navigate('/create_account')}>
        {translate.dontHaveAcc}
      </Link>
    </Box>
  );
}

export default SignIn