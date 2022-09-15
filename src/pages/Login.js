import React, { useContext } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { AuthContext } from "../functionBased/contexts/AuthContext"
import { Avatar, Box, Button, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography, Checkbox, Alert, CircularProgress } from "@mui/material";

const theme = createTheme();


const Login = (props) => {

    const { state: ContextState, user, functions } = useContext(AuthContext);
    const { isLoggedIn
        , isLoginPending
        , loginError } = ContextState;
    const { login, logout } = functions;


    const handleSubmit = e => {
        e.preventDefault()

        const data = new FormData(e.currentTarget);
        const username = data.get('username');
        const password = data.get('password');

        if (username.length < 3) {
            alert("Username minimum length must greater than 3");
            return;
        }
        if (password.length < 3) {
            alert("Password minimum length must greater than 3");
            return;
        }

        functions.login(username, password);

    }

    return (
        // <div className="container">
        //     <InputUser
        //         title="Login"
        //     />
        //     <span style={{ color: "red" }} >{loginError && "error:" + loginError.message}</span>
        //     <span>{isLoginPending && "Please Wait..."}</span>

        //     <button onClick={logout} hidden={!isLoggedIn}>Logout</button>
        // </div>

        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(https://source.unsplash.com/random)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockPersonOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            {loginError && <Alert severity="error">{loginError.message}</Alert>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}>
                                {isLoginPending ? <CircularProgress color="inherit" /> : "Sign In"}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
export default Login