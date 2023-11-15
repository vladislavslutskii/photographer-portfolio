import classnames from "classnames";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Components/Header";
import Input from "../../Components/Input";
import Label from "../../Components/Label";

import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { PathNames } from "../Router";
import styles from "./Contactme.module.scss";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

type LabelProps = {
  title: string;
};

const Contactme = ({}) => {
  const [name, setName] = useState(``);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [message, setMessage] = useState("");

  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError("Set correct email");
    } else {
      setEmailError("");
    }
  }, [emailTouched, email]);

  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  return (
    <div
      className={classNames(styles.contact, {
        [styles.contact_dark]: isDarkTheme,
      })}
    >
      <div className={styles.contact_wrap}>
        <div
          className={classNames(styles.contact_title, {
            [styles.contact_title_dark]: isDarkTheme,
          })}
        >
          Contact me
        </div>
        <div className={styles.contact_form}>
          <div
            className={classnames(styles.formContainer, {
              [styles.formContainer_dark]: isDarkTheme,
            })}
          >
            <div className={styles.formContainer_inputContainer}>
              <Label title={"Name"} />
              <Input
                value={name}
                onChange={setName}
                placeholder={"Your name"}
                className={styles.formContainer_inputContainer_nameInput}
              />
            </div>
            <div className={styles.formContainer_inputContainer}>
              <Label title={"Email"} />
              <Input
                value={email}
                onChange={setEmail}
                placeholder={"Your email"}
                onBlur={onBlurEmail}
                error={!!emailError}
                className={styles.formContainer_inputContainer_emailInput}
              />
              {emailTouched && emailError && (
                <div
                  className={classnames({
                    [styles.error_Dark]: isDarkTheme,
                  })}
                >
                  {emailError}
                </div>
              )}
            </div>
            <div className={styles.formContainer_inputContainer}>
              <Label title={"Message"} />
              <Input
                value={message}
                onChange={setMessage}
                placeholder={"Enter description"}
                type={"textarea"}
                className={styles.formContainer_inputContainer_messageInput}
              />
            </div>

            <div
              className={classNames(styles.formContainer_button, {
                [styles.formContainer_button_dark]: isDarkTheme,
              })}
            >
              send message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
