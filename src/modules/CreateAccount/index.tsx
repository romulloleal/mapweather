import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { translate } from "../../utils/Translate";
import { useAuth } from "../../providers/Auth";
import { Box, Button, Link, TextField } from "@mui/material";
import { createAccount } from "./services";

const CreateAcc = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user])

  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);

    const email = data.get('email')?.toString() || ''
    const name = data.get('name')?.toString() || ''
    const password = data.get('password')?.toString() || ''

    await createAccount(email, name, password)

    navigate('/')
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={signUp} sx={{ width: '400px', mt: 1, padding: '20px' }}>
        <TextField
          type="email"
          variant='outlined'
          name="email"
          margin="normal"
          autoCapitalize="none"
          fullWidth
          label={translate.email}
          autoFocus
          required
        />

        <TextField
          type="text"
          variant="outlined"
          name="name"
          margin="normal"
          autoCapitalize="sentences"
          fullWidth
          label={translate.fullName}
          required
        />

        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          name="password"
          fullWidth
          label={translate.password}
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
        >
          {translate.signUp}
        </Button>
      </Box>

      <Link variant="body2" underline="none" onClick={() => navigate('/')}>
        {translate.alreadyHaveAcc}
      </Link>
    </Box >
  )
}

export default CreateAcc