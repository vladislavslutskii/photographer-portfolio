import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Contactme.module.scss";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

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
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const [name, setName] = useState(``);
  const [nameError, setNameError] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [numberTouched, setNumberTouched] = useState(false);

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState(false);
  const [dateTouched, setDateTouched] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (nameTouched && name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [nameTouched, name]);

  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError("Set correct email");
    } else {
      setEmailError("");
    }
  }, [emailTouched, email]);

  useEffect(() => {
    if (numberTouched && number === "") {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  }, [numberTouched, number]);

  useEffect(() => {
    if (dateTouched && date === "") {
      setDateError(true);
    } else {
      setDateError(false);
    }
  }, [dateTouched, date]);

  const onBlurName = () => {
    setNameTouched(true);
  };

  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const onBlurNumber = () => {
    setNumberTouched(true);
  };

  const onBlurDate = () => {
    setDateTouched(true);
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
          Хотите вывести свои воспоминания на новый уровень?
        </div>
        <div
          className={classNames(styles.contact_subTitle, {
            [styles.contact_subTitle_dark]: isDarkTheme,
          })}
        >
          Будьте спокойны, зная, что вы получите прекрасные изображения,
          которыми будете дорожить вечно. Пожалуйста, заполните нашу форму ниже.
        </div>
        <div className={styles.contact_form}>
          <div
            className={classNames(styles.formContainer, {
              [styles.formContainer_dark]: isDarkTheme,
            })}
          >
            <div className={styles.formContainer_leftSide}>
              <div className={styles.formContainer_leftSide_inputContainer}>
                <Label title={"Имя"} required />
                <Input
                  value={name}
                  onChange={setName}
                  placeholder={"Ваше имя"}
                  onBlur={onBlurName}
                  error={!!nameError}
                  className={
                    styles.formContainer_leftSide_inputContainer_nameInput
                  }
                />
              </div>
              <div className={styles.formContainer_leftSide_inputContainer}>
                <Label title={"Телефон"} required />
                <Input
                  value={number}
                  onChange={setNumber}
                  placeholder={"Ваш телефон"}
                  onBlur={onBlurNumber}
                  error={!!numberError}
                  className={
                    styles.formContainer_leftSide_inputContainer_numberInput
                  }
                />
              </div>
            </div>
            <div className={styles.formContainer_rightSide}>
              <div className={styles.formContainer_rightSide_inputContainer}>
                <Label title={"Почта"} />
                <Input
                  value={email}
                  onChange={setEmail}
                  placeholder={"Ваша почта"}
                  onBlur={onBlurEmail}
                  error={!!emailError}
                  className={
                    styles.formContainer_rightSide_inputContainer_emailInput
                  }
                />
                {emailTouched && emailError && (
                  <div
                    className={classNames({
                      [styles.error_Dark]: isDarkTheme,
                    })}
                  >
                    {emailError}
                  </div>
                )}
              </div>
              <div className={styles.formContainer_leftSide_inputContainer}>
                <Label title={"Дата"} required />
                <Input
                  type="date"
                  value={date}
                  onChange={setDate}
                  placeholder={"Ваша дата"}
                  onBlur={onBlurDate}
                  error={!!dateError}
                  className={
                    styles.formContainer_rightSide_inputContainer_dateInput
                  }
                />
              </div>
            </div>
            <div className={styles.formContainer_bottom}>
              <div className={styles.formContainer_bottom_inputContainer}>
                <Label title={"Сообщение"} />
                <Input
                  value={message}
                  onChange={setMessage}
                  placeholder={"Введите описание"}
                  type={"textarea"}
                  className={
                    styles.formContainer_bottom_inputContainer_messageInput
                  }
                />
              </div>
              <div
                className={classNames(
                  styles.formContainer_bottom_bottomButton,
                  {
                    [styles.formContainer_bottom_bottomButton_dark]:
                      isDarkTheme,
                  }
                )}
              >
                Отправить
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
