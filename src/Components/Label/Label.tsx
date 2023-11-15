import React, { FC } from "react";
import styles from "./Label.module.scss";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";

type LabelProps = {
  title: string;
  required?: boolean;
};

const Label: FC<LabelProps> = ({ title, required }) => {
  const { theme, onChangeTheme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  return (
    <div
      className={classNames(styles.label, {
        [styles.required]: required,
        [styles.label_dark]: isDarkTheme,
      })}
    >
      {title}
    </div>
  );
};

export default Label;
