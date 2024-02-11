import { useState } from "react";
import styles from "./SignUp.module.scss";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import { PathNames } from "../Router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../Redux/reducers/authReducer";

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    dispatch(createNewUser({ name: name, email, password }));
    console.log("Form submitted:");
  };

  return (
    <Container className={styles.signUp}>
      <CssBaseline />
      <Paper elevation={8} className={styles.signUp_container}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h4" mb={1}>
          Регистрация
        </Typography>
        <div className={styles.signUp_form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Имя"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
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
            onChange={(event) => {
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
            onChange={(event) => {
              const { value } = event.target;
              setPassword(value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={createUser}
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
            Зарегистрироваться
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
            Уже есть аккаунт?
            <Link
              to={PathNames.SignIn}
              className={styles.formLink}
              color="secondary"
            >
              Войти
            </Link>
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default SignUp;
