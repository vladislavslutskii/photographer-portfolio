import React, { FC } from "react";
import classNames from "classnames";
import styles from "./ModalWindow.module.scss";
import { ModalWindowPropsType } from "./types";

const ModalWindow: FC<ModalWindowPropsType> = ({
  active,
  closeModal,
  children,
}) => {
  return (
    <div
      className={classNames(styles.modal, { [styles.modalActive]: active })}
      onClick={closeModal}
    >
      <div
        className={classNames(styles.modal__content, {
          [styles.modalActive__content]: active,
        })}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
