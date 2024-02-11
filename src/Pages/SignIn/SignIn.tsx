import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PathNames } from "../Router";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/reducers/authReducer";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    dispatch(getUser());
  };

  return (
    <Container className={styles.signIn}>
      <CssBaseline />
      <Paper elevation={8} className={styles.signIn_container}>
        <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h4" mb={1}>
          Вход
        </Typography>
        <form className={styles.signIn_form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            onChange={(event: any) => {
              const { value } = event.target;
              setEmail(value);
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Пароль"
            name="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={(event: any) => {
              const { value } = event.target;
              setPassword(value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={onSignIn}
            sx={{
              mt: 2,
              mb: 2,
              borderRadius: "50px",
              backgroundColor: "secondary.main",
              height: "45px",
              fontSize: "1rem",
              fontFamily: "Segoe UI",
            }}
          >
            Войти
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={2}
            sx={{
              fontSize: "1.1rem",
              fontFamily: "Segoe UI",
            }}
          >
            Нет аккаунта?
            <Link
              to={PathNames.SignUp}
              className={styles.formLink}
              color="secondary"
            >
              Зарегистрироваться
            </Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;
